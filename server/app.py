"""
app.py — Hackathon Demo App
Launch with: streamlit run app.py
Should take under 5 minutes to configure. Do NOT build this before hour 5.
"""

import streamlit as st
import numpy as np
import pickle
import os

# ── Load model artifacts ──────────────────────────────────────
# These are saved by main.py — make sure you run save_model() first
@st.cache_resource
def load_artifacts():
    with open("model.pkl", "rb") as f:
        model = pickle.load(f)
    with open("vectorizers.pkl", "rb") as f:
        vectorizers = pickle.load(f)
    with open("config.pkl", "rb") as f:
        config = pickle.load(f)
    return model, vectorizers, config

# ── Page config ───────────────────────────────────────────────
st.set_page_config(page_title="Uncover Hidden Emotions With AI", page_icon="", layout="centered")
st.title("Uncover Hidden Emotions With AI")
st.caption("Built from scratch — NLP Hackathon")

# ── Load ──────────────────────────────────────────────────────
try:
    model, vectorizers, config = load_artifacts()
    LANG        = config["lang"]
    LABEL_NAMES = config["label_names"]
    MODEL_NAME  = config["model_name"]
    METRICS     = config["metrics"]
    st.sidebar.success(f"Model: {MODEL_NAME}")
    st.sidebar.metric("Validation F1",      f"{METRICS.get('f1', 0):.3f}")
    st.sidebar.metric("Validation Accuracy", f"{METRICS.get('accuracy', 0)*100:.1f}%")
except FileNotFoundError:
    st.error("Model not found. Run `save_model()` in main.py first.")
    st.stop()

# ── Input ─────────────────────────────────────────────────────
st.subheader("Enter text to classify")
user_input = st.text_area(
    label="Text input",
    placeholder="Type or paste your text here...",
    height=120,
    label_visibility="collapsed",
)

if st.button("Analyse", type="primary", use_container_width=True):
    if not user_input.strip():
        st.warning("Please enter some text.")
    else:
        from server.pipeline import predict_single
        label, confidence = predict_single(
            user_input, model, vectorizers,
            lang=LANG, label_map=LABEL_NAMES
        )

        # ── Output ────────────────────────────────────────────
        col1, col2 = st.columns(2)
        with col1:
            st.metric("Prediction", label)
        with col2:
            conf_str = f"{confidence*100:.1f}%" if confidence else "N/A"
            st.metric("Confidence", conf_str)

        # Confidence bar
        if confidence:
            st.progress(confidence, text=f"Model confidence: {conf_str}")

        # ── Feature highlights ────────────────────────────────
        st.subheader("Key features detected")
        try:
            if "word" in vectorizers and hasattr(model, "coef_"):
                from server.preprocessing import clean_text
                cleaned = clean_text(user_input, lang=LANG)
                tokens  = cleaned.split()
                feat_names = vectorizers["word"].get_feature_names_out()

                # Get score for predicted class
                class_idx = list(LABEL_NAMES).index(label) if label in LABEL_NAMES else 0
                coef = model.coef_
                if coef.shape[0] == 1:
                    coef = np.vstack([-coef, coef])

                # Find input tokens that appear in top features
                feat_set = set(feat_names[np.argsort(coef[class_idx])[-50:]])
                highlighted = [t for t in tokens if t in feat_set]

                if highlighted:
                    st.write("Words contributing to this prediction:")
                    st.code(" | ".join(highlighted[:10]))
                else:
                    st.write("No single words matched top features (char n-grams may be driving this).")
        except Exception:
            pass   # silently skip if feature viz fails — don't crash demo
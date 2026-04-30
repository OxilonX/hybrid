import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is sentiment analysis?",
    answer: "Sentiment analysis is a natural language processing (NLP) technique used to determine the emotional tone or polarity behind a body of text. It systematically categorizes opinions expressed in text as positive, negative, or neutral."
  },
  {
    question: "Why is sentiment analysis important for businesses?",
    answer: "It allows companies to process vast amounts of unstructured text—like customer reviews, social media mentions, and support tickets—at scale. This provides real-time insights into customer satisfaction, brand health, and emerging issues without having to read thousands of comments manually."
  },
  {
    question: "How does sentiment analysis actually work?",
    answer: "Modern sentiment analysis relies on machine learning algorithms and Large Language Models (LLMs). The models are trained on large datasets of text that have been pre-labeled with emotions. When fed new text, the AI evaluates word choices, context, and grammatical structures to predict the underlying sentiment."
  },
  {
    question: "Can sentiment analysis detect sarcasm or irony?",
    answer: "Historically, sarcasm has been one of the biggest challenges for NLP because the literal meaning of the words directly contradicts the emotional intent. However, newer context-aware AI models (like advanced LLMs) have become significantly better at picking up on contextual clues and nuances to detect sarcasm."
  },
  {
    question: "How accurate is automated sentiment analysis?",
    answer: "Accuracy typically ranges from 80% to 90%, depending on the complexity of the model and the domain of the text. While AI is highly efficient, human language is complex; slang, typos, and highly nuanced phrasing can occasionally cause misclassifications."
  },
  {
    question: "What are the most common use cases?",
    answer: "The most frequent applications include brand monitoring on social media, analyzing customer feedback/NPS surveys, routing urgent or angry customer support tickets to specialized agents, and conducting market research on competitor products."
  },
  {
    question: "Does sentiment analysis work in multiple languages?",
    answer: "Yes. Most modern, enterprise-grade sentiment analysis tools and LLMs support multilingual processing. However, the highest accuracy is still generally found in English, as most foundational models were trained primarily on English-heavy datasets."
  }
];

export function SentimentAnalysisFAQ() {
  return (
    <section className="w-full py-12 px-6 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Sentiment Analysis FAQ</h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about understanding customer emotions at scale.
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

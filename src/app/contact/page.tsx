import { ContactForm } from "@/features/contact/components/ContactForm";

export const metadata = {
  title: "B2B Inquiry - StopShop",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactForm />
    </div>
  );
}

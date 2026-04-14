import { useState } from 'react';
import { Send, Mail, Phone, CheckCircle, Loader2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { personalInfo } from '@/data/portfolio';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

const projectTypes = ['Brand Identity', 'Social Media', 'Photography', 'Event Design', 'UI/UX Design', 'Other'];

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1600));
    setSubmitting(false);
    setSubmitted(true);
    setFormData(initialFormData);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'bg-input border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 transition-all focus-visible:ring-1 focus-visible:ring-mint/50 focus-visible:border-mint/50';
  const textareaClass =
    'bg-input border-border text-foreground placeholder:text-muted-foreground rounded-xl min-h-[130px] resize-none transition-all focus-visible:ring-1 focus-visible:ring-mint/50 focus-visible:border-mint/50';

  return (
    <section id="contact" className="py-28 relative">
      {/* Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,179,0.05) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,77,157,0.05) 0%, transparent 70%)' }} />

      <div className="section-container">
        <SectionHeading
          label="Get In Touch"
          whiteText="Let's Create"
          gradientText="Together"
          subtitle="Got a project, a campaign, or a vision? I'd love to hear all about it."
          accentColor="pink"
        />

        {/* Content area — 3 column: left info, divider, right form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — Info panel */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="h-full flex flex-col gap-6">
              {/* Heading card */}
              <div className="rounded-2xl p-7 flex-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,229,179,0.06) 0%, rgba(255,77,157,0.06) 100%)',
                  border: '1px solid rgba(0,229,179,0.2)',
                }}>
                <div className="w-12 h-12 rounded-2xl gradient-bg-pink flex items-center justify-center mb-5 glow-pink-sm">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <h3 className="text-foreground font-black text-2xl mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Dar es Salaam,<br />
                  <span className="gradient-text">Tanzania</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Available for local projects in Dar es Salaam and remote collaborations worldwide. Always happy to chat over tea ☕
                </p>

                <div className="space-y-3">
                  <a href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-mint/15"
                      style={{ background: 'rgba(0,229,179,0.1)', color: '#00E5B3' }}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      {personalInfo.email}
                    </span>
                  </a>
                  <a href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-pink-brand/15"
                      style={{ background: 'rgba(255,77,157,0.1)', color: '#FF4D9D' }}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      {personalInfo.phone}
                    </span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border" style={{ height: 200 }}>
                <iframe
                  title="Dar es Salaam Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252988.65086958555!2d39.16230749999999!3d-6.8228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1744600000000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block', filter: 'hue-rotate(160deg) saturate(0.5) brightness(0.65)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="rounded-2xl p-8 h-full"
              style={{ background: '#130F1E', border: '1px solid #231D35' }}>
              <h3 className="text-foreground font-black text-xl mb-6" style={{ letterSpacing: '-0.01em' }}>
                Send Me a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 gap-5"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center glow-mint">
                    <CheckCircle className="w-8 h-8 text-plum-deep" />
                  </div>
                  <h4 className="text-foreground font-black text-xl">Yay! Message sent 🎉</h4>
                  <p className="text-muted-foreground text-sm text-center max-w-xs">
                    Thank you for reaching out! I'll reply within 24 hours. Can't wait to create something amazing together!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName" className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                        First Name <span className="text-mint">*</span>
                      </Label>
                      <Input id="firstName" name="firstName" value={formData.firstName}
                        onChange={handleChange} placeholder="Lucy" required className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lastName" className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                        Last Name <span className="text-mint">*</span>
                      </Label>
                      <Input id="lastName" name="lastName" value={formData.lastName}
                        onChange={handleChange} placeholder="Bonifas" required className={inputClass} />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                        Email <span className="text-mint">*</span>
                      </Label>
                      <Input id="email" name="email" type="email" value={formData.email}
                        onChange={handleChange} placeholder="you@email.com" required className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                        Phone
                      </Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone}
                        onChange={handleChange} placeholder="+255 712 345 678" className={inputClass} />
                    </div>
                  </div>

                  {/* Project type chips */}
                  <div className="space-y-2">
                    <Label className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                      Project Type
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData((p) => ({ ...p, projectType: p.projectType === type ? '' : type }))}
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
                          style={formData.projectType === type
                            ? { background: 'rgba(0,229,179,0.15)', border: '1px solid rgba(0,229,179,0.5)', color: '#00E5B3' }
                            : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#8B85A8' }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                      Your Message <span className="text-mint">*</span>
                    </Label>
                    <Textarea id="message" name="message" value={formData.message}
                      onChange={handleChange} placeholder="Tell me about your project, vision, or idea…"
                      required className={textareaClass} />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full gradient-bg text-plum-deep font-black rounded-xl h-12 hover:opacity-90 transition-opacity disabled:opacity-60 glow-mint-sm text-sm"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending your message…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconLoader2, IconSend, IconCheck } from "@tabler/icons-react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        toast.success(result.message, {
          duration: 4000,
          style: {
            background: "#10b981",
            color: "#ffffff",
            border: "none",
          },
        });
        reset();
      } else {
        toast.error(result.message, {
          duration: 5000,
          style: {
            background: "#ef4444",
            color: "#ffffff",
            border: "none",
          },
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        duration: 5000,
        style: {
          background: "#ef4444",
          color: "#ffffff",
          border: "none",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-900 dark:text-white mb-2"
        >
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className={`
            w-full px-4 py-3 rounded-xl border transition-all duration-200
            bg-white/5 dark:bg-white/5 backdrop-blur-lg
            border-neutral-200/20 dark:border-white/10
            text-neutral-900 dark:text-white
            placeholder:text-neutral-500 dark:placeholder:text-neutral-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/50
            focus:border-blue-500/50
            ${errors.name ? "border-red-500 focus:ring-red-500/50" : ""}
          `}
          placeholder="Your name"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {errors.name.message}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-900 dark:text-white mb-2"
        >
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={`
            w-full px-4 py-3 rounded-xl border transition-all duration-200
            bg-white/5 dark:bg-white/5 backdrop-blur-lg
            border-neutral-200/20 dark:border-white/10
            text-neutral-900 dark:text-white
            placeholder:text-neutral-500 dark:placeholder:text-neutral-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/50
            focus:border-blue-500/50
            ${errors.email ? "border-red-500 focus:ring-red-500/50" : ""}
          `}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {errors.email.message}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-900 dark:text-white mb-2"
        >
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          className={`
            w-full px-4 py-3 rounded-xl border transition-all duration-200
            bg-white/5 dark:bg-white/5 backdrop-blur-lg
            border-neutral-200/20 dark:border-white/10
            text-neutral-900 dark:text-white
            placeholder:text-neutral-500 dark:placeholder:text-neutral-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/50
            focus:border-blue-500/50
            resize-none
            ${errors.message ? "border-red-500 focus:ring-red-500/50" : ""}
          `}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`
          w-full px-6 py-3 rounded-xl font-medium
          bg-neutral-900 dark:bg-white text-white dark:text-neutral-900
          hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300
          flex items-center justify-center gap-2
          focus:outline-none focus:ring-2 focus:ring-orange-500/50
        `}
      >
        {isSubmitting ? (
          <>
            <IconLoader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <IconSend className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
};


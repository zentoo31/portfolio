"use client"
import {motion} from "motion/react";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 font-mono">
      <h1 className="text-3xl text-text-def">Contact</h1>
      <p className="max-w-2xl text-text-description">
        Use this page to share contact details, social links, or a simple
        contact form.
      </p>
    </motion.div>
  );
}

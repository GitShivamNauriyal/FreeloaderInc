"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(8, "Phone number is too short"),
    email: z.string().email("Invalid email address"),
    interest: z.string().optional(),
    message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        console.log("Send email with form data:", data);
        // Hook up your email API here
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-24 text-white">
            <h2 className="text-4xl font-semibold text-violet-400 mb-8">
                Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name")}
                            className="w-full px-4 py-3 bg-neutral-900 text-white placeholder-gray-500 border border-neutral-700 rounded-md outline-none"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            {...register("phone")}
                            className="w-full px-4 py-3 bg-neutral-900 text-white placeholder-gray-500 border border-neutral-700 rounded-md outline-none"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="E-mail"
                            {...register("email")}
                            className="w-full px-4 py-3 bg-neutral-900 text-white placeholder-gray-500 border border-neutral-700 rounded-md outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Interested In"
                        {...register("interest")}
                        className="w-full px-4 py-3 bg-neutral-900 text-white placeholder-gray-500 border border-neutral-700 rounded-md outline-none"
                    />

                    <div>
                        <textarea
                            rows={4}
                            placeholder="Message"
                            {...register("message")}
                            className="w-full px-4 py-3 bg-neutral-900 text-white placeholder-gray-500 border border-neutral-700 rounded-md outline-none"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-md transition"
                    >
                        SEND EMAIL →
                    </button>
                </form>

                {/* Replace this with a Lottie, illustration or map embed */}
                <div className="bg-neutral-800 rounded-lg w-full h-[400px]" />
            </div>
        </section>
    );
}

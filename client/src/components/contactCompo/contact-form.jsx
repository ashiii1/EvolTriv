// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import { images } from "../../assets/Assets";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
//     message: "Please enter a valid contact number.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   subject: z.string().min(5, {
//     message: "Subject must be at least 5 characters.",
//   }),
//   query: z.string().min(10, {
//     message: "Query must be at least 10 characters.",
//   }),
// });

// export function ContactFormComponent() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       contactNo: "",
//       email: "",
//       subject: "",
//       query: "",
//     },
//   });

//   function onSubmit(values) {
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       console.log(values);
//       toast({
//         title: "Message Sent",
//         description:
//           "We've received your message and will get back to you soon.",
//       });
//       form.reset();
//       setIsSubmitting(false);
//     }, 2000);
//   }

//   return (
//     <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
//       <div>
//         <img className="rounded-md" src={images.contact} alt="" />
//       </div>
//       <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
//         <h2 className=" text-2xl font-bold mb-6 text-center ">
//           Contact Us
//         </h2>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="contactNo"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Contact Number</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="tel"
//                       placeholder="Your contact number"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Subject</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Message subject" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="query"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Query</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Your query"
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               type="submit"
//               className="w-full bg-[#118B50] hover:bg-pcolor/90"
//               disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import { images } from "../../assets/Assets";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
//     message: "Please enter a valid contact number.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   subject: z.string().min(5, {
//     message: "Subject must be at least 5 characters.",
//   }),
//   query: z.string().min(10, {
//     message: "Query must be at least 10 characters.",
//   }),
//   category: z.string().nonempty({ message: "Please select a category." }),
// });

// export function ContactFormComponent() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       contactNo: "",
//       email: "",
//       subject: "",
//       query: "",
//       category: "",
//     },
//   });

//   function onSubmit(values) {
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       console.log(values);
//       toast({
//         title: "Message Sent",
//         description:
//           "We've received your message and will get back to you soon.",
//       });
//       form.reset();
//       setIsSubmitting(false);
//     }, 2000);
//   }

//   return (
//     <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
//       <div>
//         <img className="rounded-md" src='https://solariumenergy.in/wp-content/uploads/2022/01/service01-1-1024x1024.jpg' alt="" />
//       </div>
//       <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
//         <h2 className=" text-2xl font-bold mb-6 text-center ">
//           Contact Us
//         </h2>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="contactNo"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Contact Number</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="tel"
//                       placeholder="Your contact number"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Subject</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Message subject" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* 🆕 Category Dropdown */}
//             <FormField
//               control={form.control}
//               name="category"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Category</FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a category" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
//                       <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
//                       <SelectItem value="Student Support">Student Support</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="query"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Query</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Your query"
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               type="submit"
//               className="w-full bg-[#118B50] hover:bg-pcolor/90"
//               disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }









// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "../ui/button";
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
// import emailjs from '@emailjs/browser';

// // ✅ Zod Schema
// // ✅ Updated Zod Schema with optional email and query
// const formSchema = z.object({
//     name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//     contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid contact number." }),
//     email: z.string().email({ message: "Enter a valid email address." }).optional().or(z.literal("")),
//     subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
//     query: z.string().min(10, { message: "Query must be at least 10 characters." }).optional().or(z.literal("")),
//     category: z.string().nonempty({ message: "Please select a category." }),
// });


// export function ContactFormComponent() {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const { toast } = useToast();

//     const form = useForm({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             name: "",
//             contactNo: "",
//             email: "",
//             subject: "",
//             query: "",
//             category: "",
//         },
//     });

//     const onSubmit = async (values) => {
//         try {
//             setIsSubmitting(true);

//             const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//             const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//             const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//             const templateParams = {
//                 from_name: values.name,
//                 contact_number: values.contactNo,
//                 from_email: values.email,
//                 subject: values.subject,
//                 message: values.query,
//                 category: values.category,
//             };

//             await emailjs.send(serviceId, templateId, templateParams, publicKey);

//             toast({
//                 title: "Message Sent",
//                 description: "We've received your message and will get back to you soon.",
//             });

//             console.log("Toast triggered");

//             form.reset({
//                 name: "",
//                 contactNo: "",
//                 email: "",
//                 subject: "",
//                 query: "",
//                 category: "",
//             });

//         } catch (error) {
//             console.error("Email sending error:", error);

//             toast({
//                 title: "Error",
//                 description: "Failed to send message. Please try again.",
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
//                <div>
//                  <img className="rounded-md" src='/assets/Images/contactus.jpg' alt="" />
//                </div>
//                <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
//                  <h2 className=" text-2xl font-bold mb-6 text-center ">
//                    Contact Us
//                  </h2>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                         {/* ✅ Name Field */}
//                         <FormField
//                             control={form.control}
//                             name="name"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Name</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Your Name" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         {/* ✅ Contact Number Field */}
//                         <FormField
//                             control={form.control}
//                             name="contactNo"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Contact Number</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="+1234567890" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         {/* ✅ Email Field */}
//                         <FormField
//                             control={form.control}
//                             name="email"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Email</FormLabel>
//                                     <FormControl>
//                                         <Input type="email" placeholder="your@email.com" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         {/* ✅ Subject Field */}
//                         <FormField
//                             control={form.control}
//                             name="subject"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Subject</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Subject" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         {/* ✅ Category Field */}
//                         <FormField
//                             control={form.control}
//                             name="category"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Category</FormLabel>
//                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                         <FormControl>
//                                             <SelectTrigger>
//                                                 <SelectValue placeholder="Select a category" />
//                                             </SelectTrigger>
//                                         </FormControl>
//                                         <SelectContent>
//                                             <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
//                                             <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
//                                             <SelectItem value="Student Support">Student Support</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         {/* ✅ Query Field */}
//                         <FormField
//                             control={form.control}
//                             name="query"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Query</FormLabel>
//                                     <FormControl>
//                                         <Textarea placeholder="Your query" className="resize-none" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         {/* ✅ Submit Button */}
//                         <Button
//                             type="submit"
//                             className="w-full bg-[#118B50] dark:bg-white hover:bg-pcolor/90"
//                             disabled={isSubmitting}
//                         >
//                             {isSubmitting ? "Sending..." : "Send Message"}
//                         </Button>
//                     </form>
//                 </Form>
//             </div>
//         </div>
//     );
// }





// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import emailjs from "@emailjs/browser";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   contactNo: z
//     .string()
//     .regex(/^\+?[1-9]\d{1,14}$/, {
//       message: "Enter a valid contact number.",
//     }),
//   email: z
//     .string()
//     .email({ message: "Enter a valid email address." })
//     .optional()
//     .or(z.literal("")),
//   subject: z
//     .string()
//     .min(5, { message: "Subject must be at least 5 characters." }),
//   query: z
//     .string()
//     .min(10, { message: "Query must be at least 10 characters." })
//     .optional()
//     .or(z.literal("")),
//   category: z.string().nonempty({ message: "Please select a category." }),
// });

// export function ContactFormComponent() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       contactNo: "",
//       email: "",
//       subject: "",
//       query: "",
//       category: "",
//     },
//   });

//   const onSubmit = async (values) => {
//     try {
//       setIsSubmitting(true);

//       const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//       const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//       const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//       const templateParams = {
//         from_name: values.name,
//         contact_number: values.contactNo,
//         from_email: values.email,
//         subject: values.subject,
//         message: values.query,
//         category: values.category,
//       };

//       await emailjs.send(serviceId, templateId, templateParams, publicKey);
//       console.log("Toast should appear now");

//       toast({
//         title: "Message Sent",
//         description: "We've received your message and will get back to you soon.",
//       });

//       form.reset();
//     } catch (error) {
//       console.error("Email sending error:", error);
//       toast({
//         title: "Error",
//         description: "Failed to send message. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex justify-center bg-green-100 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-black">
//       <div className="w-full max-w-md px-4 bg-card rounded-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="contactNo"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Contact Number</FormLabel>
//                   <FormControl>
//                     <Input placeholder="+" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="your@email.com" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Subject</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Subject" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="category"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Category</FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a category" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
//                       <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
//                       <SelectItem value="Student Support">Student Support</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="query"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Query</FormLabel>
//                   <FormControl>
//                     <Textarea placeholder="Your query" className="resize-none" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button
//               type="submit"
//               className="w-full bg-[#118B50] dark:bg-white hover:bg-pcolor/90"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";
import AOS from "aos";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  contactNo: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid contact number." }),
  email: z.string().email({ message: "Enter a valid email address." }).optional().or(z.literal("")),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  query: z.string().min(10, { message: "Query must be at least 10 characters." }).optional().or(z.literal("")),
  category: z.string().nonempty({ message: "Please select a category." }),
});

export default function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 3000 }); // super slow animation
  }, []);

  const [effect, setEffect] = useState("zoom-in");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNo: "",
      email: "",
      subject: "",
      query: "",
      category: "",
    },
  });

  useEffect(() => {
    Aos.init({});
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setEffect("fade-left");
    } else {
      setEffect("zoom-in");
    }
  }, []);

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: values.name,
        contact_number: values.contactNo,
        from_email: values.email,
        subject: values.subject,
        message: values.query,
        category: values.category,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({ title: "Message Sent", description: "We've received your message and will get back to you soon." });
      form.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      toast({ title: "Error", description: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        className={`bg-[url('/contactus-bg1.jpg')] bg-cover bg-[#C1D8C3] dark:bg-black bg-center max-w-screen mx-[calc(50%-50vw)]
  grid grid-cols-1 lg:grid-cols-2 px-0 sm:px-4 md:px-8 lg:px-12 pt-0 mt-0 mb-0`}
        style={{ marginTop: '0px', paddingTop: '0px' }}
      >



        {/* Left side info */}
        <div className="flex flex-col items-center justify-center py-2 mt-0">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Contact Our Team
          </h2>
          <img
            src="https://www.shutterstock.com/image-vector/call-center-online-customer-support-600nw-2221786753.jpg"
            alt="Large animated"
            data-aos="fade-right"
            data-aos-duration="3000"  // slow: 3 seconds
            className="w-[400px] h-auto mb-4"
          />
          <p className="text-xl font-semibold text-center">
            Empowering ideas with EvolTriv

          </p>
          <p className="text-center text-gray-500 dark:text-gray-300 mt-2 max-w-md">
            We help you bring your vision to life with innovative solutions and a dedicated team that supports your journey.
          </p>
        </div>



        {/* Right side: your emailjs react-hook-form form */}
        <div className="flex justify-center items-center px-10 py-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[450px] px-10 py-10 shadow-lg flex flex-col gap-6"
              data-aos={effect}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactNo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="+91..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
                        <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
                        <SelectItem value="Student Support">Student Support</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Your query" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-green-300 text-black dark:bg-blue-900 dark:text-white hover:bg-pcolor/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}

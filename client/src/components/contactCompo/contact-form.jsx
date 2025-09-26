// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import { Button } from "../ui/button";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "../ui/form";
// // import { Input } from "../ui/input";
// // import { Textarea } from "../ui/textarea";
// // import { useToast } from "../ui/use-toast";
// // import { images } from "../../assets/Assets";

// // const formSchema = z.object({
// //   name: z.string().min(2, {
// //     message: "Name must be at least 2 characters.",
// //   }),
// //   contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
// //     message: "Please enter a valid contact number.",
// //   }),
// //   email: z.string().email({
// //     message: "Please enter a valid email address.",
// //   }),
// //   subject: z.string().min(5, {
// //     message: "Subject must be at least 5 characters.",
// //   }),
// //   query: z.string().min(10, {
// //     message: "Query must be at least 10 characters.",
// //   }),
// // });

// // export function ContactFormComponent() {
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const { toast } = useToast();

// //   const form = useForm({
// //     resolver: zodResolver(formSchema),
// //     defaultValues: {
// //       name: "",
// //       contactNo: "",
// //       email: "",
// //       subject: "",
// //       query: "",
// //     },
// //   });

// //   function onSubmit(values) {
// //     setIsSubmitting(true);
// //     // Simulate API call
// //     setTimeout(() => {
// //       console.log(values);
// //       toast({
// //         title: "Message Sent",
// //         description:
// //           "We've received your message and will get back to you soon.",
// //       });
// //       form.reset();
// //       setIsSubmitting(false);
// //     }, 2000);
// //   }

// //   return (
// //     <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
// //       <div>
// //         <img className="rounded-md" src={images.contact} alt="" />
// //       </div>
// //       <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
// //         <h2 className=" text-2xl font-bold mb-6 text-center ">
// //           Contact Us
// //         </h2>
// //         <Form {...form}>
// //           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// //             <FormField
// //               control={form.control}
// //               name="name"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Name</FormLabel>
// //                   <FormControl>
// //                     <Input placeholder="Your name" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="contactNo"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Contact Number</FormLabel>
// //                   <FormControl>
// //                     <Input
// //                       type="tel"
// //                       placeholder="Your contact number"
// //                       {...field}
// //                     />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="email"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Email</FormLabel>
// //                   <FormControl>
// //                     <Input type="email" placeholder="Your email" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="subject"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Subject</FormLabel>
// //                   <FormControl>
// //                     <Input placeholder="Message subject" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="query"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Query</FormLabel>
// //                   <FormControl>
// //                     <Textarea
// //                       placeholder="Your query"
// //                       className="resize-none"
// //                       {...field}
// //                     />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <Button
// //               type="submit"
// //               className="w-full bg-[#118B50] hover:bg-pcolor/90"
// //               disabled={isSubmitting}>
// //               {isSubmitting ? "Sending..." : "Send Message"}
// //             </Button>
// //           </form>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import { Button } from "../ui/button";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "../ui/form";
// // import { Input } from "../ui/input";
// // import { Textarea } from "../ui/textarea";
// // import { useToast } from "../ui/use-toast";
// // import { images } from "../../assets/Assets";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// // const formSchema = z.object({
// //   name: z.string().min(2, {
// //     message: "Name must be at least 2 characters.",
// //   }),
// //   contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
// //     message: "Please enter a valid contact number.",
// //   }),
// //   email: z.string().email({
// //     message: "Please enter a valid email address.",
// //   }),
// //   subject: z.string().min(5, {
// //     message: "Subject must be at least 5 characters.",
// //   }),
// //   query: z.string().min(10, {
// //     message: "Query must be at least 10 characters.",
// //   }),
// //   category: z.string().nonempty({ message: "Please select a category." }),
// // });

// // export function ContactFormComponent() {
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const { toast } = useToast();

// //   const form = useForm({
// //     resolver: zodResolver(formSchema),
// //     defaultValues: {
// //       name: "",
// //       contactNo: "",
// //       email: "",
// //       subject: "",
// //       query: "",
// //       category: "",
// //     },
// //   });

// //   function onSubmit(values) {
// //     setIsSubmitting(true);
// //     // Simulate API call
// //     setTimeout(() => {
// //       console.log(values);
// //       toast({
// //         title: "Message Sent",
// //         description:
// //           "We've received your message and will get back to you soon.",
// //       });
// //       form.reset();
// //       setIsSubmitting(false);
// //     }, 2000);
// //   }

// //   return (
// //     <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
// //       <div>
// //         <img className="rounded-md" src='https://solariumenergy.in/wp-content/uploads/2022/01/service01-1-1024x1024.jpg' alt="" />
// //       </div>
// //       <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
// //         <h2 className=" text-2xl font-bold mb-6 text-center ">
// //           Contact Us
// //         </h2>
// //         <Form {...form}>
// //           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// //             <FormField
// //               control={form.control}
// //               name="name"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Name</FormLabel>
// //                   <FormControl>
// //                     <Input placeholder="Your name" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="contactNo"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Contact Number</FormLabel>
// //                   <FormControl>
// //                     <Input
// //                       type="tel"
// //                       placeholder="Your contact number"
// //                       {...field}
// //                     />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="email"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Email</FormLabel>
// //                   <FormControl>
// //                     <Input type="email" placeholder="Your email" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="subject"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Subject</FormLabel>
// //                   <FormControl>
// //                     <Input placeholder="Message subject" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             {/* 🆕 Category Dropdown */}
// //             <FormField
// //               control={form.control}
// //               name="category"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Category</FormLabel>
// //                   <Select onValueChange={field.onChange} defaultValue={field.value}>
// //                     <FormControl>
// //                       <SelectTrigger>
// //                         <SelectValue placeholder="Select a category" />
// //                       </SelectTrigger>
// //                     </FormControl>
// //                     <SelectContent>
// //                       <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
// //                       <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
// //                       <SelectItem value="Student Support">Student Support</SelectItem>
// //                     </SelectContent>
// //                   </Select>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             <FormField
// //               control={form.control}
// //               name="query"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Query</FormLabel>
// //                   <FormControl>
// //                     <Textarea
// //                       placeholder="Your query"
// //                       className="resize-none"
// //                       {...field}
// //                     />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //             <Button
// //               type="submit"
// //               className="w-full bg-[#118B50] hover:bg-pcolor/90"
// //               disabled={isSubmitting}>
// //               {isSubmitting ? "Sending..." : "Send Message"}
// //             </Button>
// //           </form>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // }









// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import { Button } from "../ui/button";
// // import {
// //     Form,
// //     FormControl,
// //     FormField,
// //     FormItem,
// //     FormLabel,
// //     FormMessage,
// // } from "../ui/form";
// // import { Input } from "../ui/input";
// // import { Textarea } from "../ui/textarea";
// // import { useToast } from "../ui/use-toast";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
// // import emailjs from '@emailjs/browser';

// // // ✅ Zod Schema
// // // ✅ Updated Zod Schema with optional email and query
// // const formSchema = z.object({
// //     name: z.string().min(2, { message: "Name must be at least 2 characters." }),
// //     contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid contact number." }),
// //     email: z.string().email({ message: "Enter a valid email address." }).optional().or(z.literal("")),
// //     subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
// //     query: z.string().min(10, { message: "Query must be at least 10 characters." }).optional().or(z.literal("")),
// //     category: z.string().nonempty({ message: "Please select a category." }),
// // });


// // export function ContactFormComponent() {
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const { toast } = useToast();

// //     const form = useForm({
// //         resolver: zodResolver(formSchema),
// //         defaultValues: {
// //             name: "",
// //             contactNo: "",
// //             email: "",
// //             subject: "",
// //             query: "",
// //             category: "",
// //         },
// //     });

// //     const onSubmit = async (values) => {
// //         try {
// //             setIsSubmitting(true);

// //             const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// //             const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// //             const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// //             const templateParams = {
// //                 from_name: values.name,
// //                 contact_number: values.contactNo,
// //                 from_email: values.email,
// //                 subject: values.subject,
// //                 message: values.query,
// //                 category: values.category,
// //             };

// //             await emailjs.send(serviceId, templateId, templateParams, publicKey);

// //             toast({
// //                 title: "Message Sent",
// //                 description: "We've received your message and will get back to you soon.",
// //             });

// //             console.log("Toast triggered");

// //             form.reset({
// //                 name: "",
// //                 contactNo: "",
// //                 email: "",
// //                 subject: "",
// //                 query: "",
// //                 category: "",
// //             });

// //         } catch (error) {
// //             console.error("Email sending error:", error);

// //             toast({
// //                 title: "Error",
// //                 description: "Failed to send message. Please try again.",
// //             });
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     return (
// //         <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
// //                <div>
// //                  <img className="rounded-md" src='/assets/Images/contactus.jpg' alt="" />
// //                </div>
// //                <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
// //                  <h2 className=" text-2xl font-bold mb-6 text-center ">
// //                    Contact Us
// //                  </h2>
// //                 <Form {...form}>
// //                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// //                         {/* ✅ Name Field */}
// //                         <FormField
// //                             control={form.control}
// //                             name="name"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Name</FormLabel>
// //                                     <FormControl>
// //                                         <Input placeholder="Your Name" {...field} />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

// //                         {/* ✅ Contact Number Field */}
// //                         <FormField
// //                             control={form.control}
// //                             name="contactNo"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Contact Number</FormLabel>
// //                                     <FormControl>
// //                                         <Input placeholder="+1234567890" {...field} />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

// //                         {/* ✅ Email Field */}
// //                         <FormField
// //                             control={form.control}
// //                             name="email"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Email</FormLabel>
// //                                     <FormControl>
// //                                         <Input type="email" placeholder="your@email.com" {...field} />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

// //                         {/* ✅ Subject Field */}
// //                         <FormField
// //                             control={form.control}
// //                             name="subject"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Subject</FormLabel>
// //                                     <FormControl>
// //                                         <Input placeholder="Subject" {...field} />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

// //                         {/* ✅ Category Field */}
// //                         <FormField
// //                             control={form.control}
// //                             name="category"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Category</FormLabel>
// //                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
// //                                         <FormControl>
// //                                             <SelectTrigger>
// //                                                 <SelectValue placeholder="Select a category" />
// //                                             </SelectTrigger>
// //                                         </FormControl>
// //                                         <SelectContent>
// //                                             <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
// //                                             <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
// //                                             <SelectItem value="Student Support">Student Support</SelectItem>
// //                                         </SelectContent>
// //                                     </Select>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

// //                         {/* ✅ Query Field */}
// //                         <FormField
// //                             control={form.control}
// //                             name="query"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Query</FormLabel>
// //                                     <FormControl>
// //                                         <Textarea placeholder="Your query" className="resize-none" {...field} />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

// //                         {/* ✅ Submit Button */}
// //                         <Button
// //                             type="submit"
// //                             className="w-full bg-[#118B50] dark:bg-white hover:bg-pcolor/90"
// //                             disabled={isSubmitting}
// //                         >
// //                             {isSubmitting ? "Sending..." : "Send Message"}
// //                         </Button>
// //                     </form>
// //                 </Form>
// //             </div>
// //         </div>
// //     );
// // }





// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import { Button } from "../ui/button";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "../ui/form";
// // import { Input } from "../ui/input";
// // import { Textarea } from "../ui/textarea";
// // import { useToast } from "../ui/use-toast";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "../ui/select";
// // import emailjs from "@emailjs/browser";

// // const formSchema = z.object({
// //   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
// //   contactNo: z
// //     .string()
// //     .regex(/^\+?[1-9]\d{1,14}$/, {
// //       message: "Enter a valid contact number.",
// //     }),
// //   email: z
// //     .string()
// //     .email({ message: "Enter a valid email address." })
// //     .optional()
// //     .or(z.literal("")),
// //   subject: z
// //     .string()
// //     .min(5, { message: "Subject must be at least 5 characters." }),
// //   query: z
// //     .string()
// //     .min(10, { message: "Query must be at least 10 characters." })
// //     .optional()
// //     .or(z.literal("")),
// //   category: z.string().nonempty({ message: "Please select a category." }),
// // });

// // export function ContactFormComponent() {
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const { toast } = useToast();

// //   const form = useForm({
// //     resolver: zodResolver(formSchema),
// //     defaultValues: {
// //       name: "",
// //       contactNo: "",
// //       email: "",
// //       subject: "",
// //       query: "",
// //       category: "",
// //     },
// //   });

// //   const onSubmit = async (values) => {
// //     try {
// //       setIsSubmitting(true);

// //       const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// //       const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// //       const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// //       const templateParams = {
// //         from_name: values.name,
// //         contact_number: values.contactNo,
// //         from_email: values.email,
// //         subject: values.subject,
// //         message: values.query,
// //         category: values.category,
// //       };

// //       await emailjs.send(serviceId, templateId, templateParams, publicKey);
// //       console.log("Toast should appear now");

// //       toast({
// //         title: "Message Sent",
// //         description: "We've received your message and will get back to you soon.",
// //       });

// //       form.reset();
// //     } catch (error) {
// //       console.error("Email sending error:", error);
// //       toast({
// //         title: "Error",
// //         description: "Failed to send message. Please try again.",
// //       });
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center bg-green-100 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-black">
// //       <div className="w-full max-w-md px-4 bg-card rounded-lg">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
// //         <Form {...form}>
// //           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// //             <FormField
// //               control={form.control}
// //               name="name"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Name</FormLabel>
// //                   <FormControl>
// //                     <Input placeholder="Your Name" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             <FormField
// //               control={form.control}
// //               name="contactNo"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Contact Number</FormLabel>
// //                   <FormControl>
// //                     <Input placeholder="+" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             <FormField
// //               control={form.control}
// //               name="email"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Email</FormLabel>
// //                   <FormControl>
// //                     <Input type="email" placeholder="your@email.com" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             <FormField
// //               control={form.control}
// //               name="subject"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Subject</FormLabel>
// //                   <FormControl>
// //                     <Input placeholder="Subject" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             <FormField
// //               control={form.control}
// //               name="category"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Category</FormLabel>
// //                   <Select onValueChange={field.onChange} defaultValue={field.value}>
// //                     <FormControl>
// //                       <SelectTrigger>
// //                         <SelectValue placeholder="Select a category" />
// //                       </SelectTrigger>
// //                     </FormControl>
// //                     <SelectContent>
// //                       <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
// //                       <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
// //                       <SelectItem value="Student Support">Student Support</SelectItem>
// //                     </SelectContent>
// //                   </Select>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             <FormField
// //               control={form.control}
// //               name="query"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Query</FormLabel>
// //                   <FormControl>
// //                     <Textarea placeholder="Your query" className="resize-none" {...field} />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />

// //             <Button
// //               type="submit"
// //               className="w-full bg-[#118B50] dark:bg-white hover:bg-pcolor/90"
// //               disabled={isSubmitting}
// //             >
// //               {isSubmitting ? "Sending..." : "Send Message"}
// //             </Button>
// //           </form>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import "animate.css";
// import AOS from "aos";


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
//     .regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid contact number." }),
//   email: z.string().email({ message: "Enter a valid email address." }).optional().or(z.literal("")),
//   subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
//   query: z.string().min(10, { message: "Query must be at least 10 characters." }).optional().or(z.literal("")),
//   category: z.string().nonempty({ message: "Please select a category." }),
// });

// export default function ContactUs() {
//   useEffect(() => {
//     AOS.init({ duration: 3000 }); // super slow animation
//   }, []);

//   const [effect, setEffect] = useState("zoom-in");
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

//   useEffect(() => {
//     Aos.init({});
//     const screenWidth = window.innerWidth;
//     if (screenWidth >= 1024) {
//       setEffect("fade-left");
//     } else {
//       setEffect("zoom-in");
//     }
//   }, []);

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
//       toast({ title: "Message Sent", description: "We've received your message and will get back to you soon." });
//       form.reset();
//     } catch (error) {
//       console.error("Email sending error:", error);
//       toast({ title: "Error", description: "Failed to send message. Please try again." });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <section
//         className={`bg-[url('/contactus-bg1.jpg')] bg-cover bg-[#C1D8C3] dark:bg-black bg-center max-w-screen mx-[calc(50%-50vw)]
//   grid grid-cols-1 lg:grid-cols-2 px-0 sm:px-4 md:px-8 lg:px-12 pt-0 mt-0 mb-0`}
//         style={{ marginTop: '0px', paddingTop: '0px' }}
//       >



//         {/* Left side info */}
//         <div className="flex flex-col items-center justify-center py-2 mt-0">
//           <h2 className="text-3xl font-bold mb-4 text-center">
//             Contact Our Team
//           </h2>
//           <img
//             src="https://www.shutterstock.com/image-vector/call-center-online-customer-support-600nw-2221786753.jpg"
//             alt="Large animated"
//             data-aos="fade-right"
//             data-aos-duration="3000"  // slow: 3 seconds
//             className="w-[400px] h-auto mb-4"
//           />
//           <p className="text-xl font-semibold text-center">
//             Empowering ideas with EvolTriv

//           </p>
//           <p className="text-center text-gray-500 dark:text-gray-300 mt-2 max-w-md">
//             We help you bring your vision to life with innovative solutions and a dedicated team that supports your journey.
//           </p>
//         </div>



//       {/* Right side: your emailjs react-hook-form form */}
//       <div className="flex justify-center items-center px-10 py-16">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[450px] px-10 py-10 shadow-lg flex flex-col gap-6"
//             data-aos={effect}
//           >
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
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
//                   <FormControl>
//                     <Input placeholder="+91..." {...field} />
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
//                   <FormControl>
//                     <Textarea placeholder="Your query" className="resize-none" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit" className="w-full bg-green-300 text-black dark:bg-blue-900 dark:text-white hover:bg-pcolor/90" disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </section>
//   </>
// );
// }

// import React, { useEffect, useRef, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import emailjs from "@emailjs/browser";
// import Globe from "react-globe.gl";
// import { motion } from "framer-motion";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { useToast } from "../ui/use-toast";
// import * as topojson from "topojson-client";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   contactNo: z
//     .string()
//     .regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid contact number." }),
//   email: z.string().email({ message: "Enter a valid email address." }).optional().or(z.literal("")),
//   subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
//   query: z.string().min(10, { message: "Query must be at least 10 characters." }).optional().or(z.literal("")),
//   category: z.string().nonempty({ message: "Please select a category." }),
// });

// export default function ContactUs() {
//   const [effect, setEffect] = useState("zoom-in");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const globeEl = useRef();
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

//   // Init AOS and effect
//   useEffect(() => {
//     Aos.init({ duration: 3000 });
//     if (window.innerWidth >= 1024) {
//       setEffect("fade-left");
//     } else {
//       setEffect("zoom-in");
//     }
//   }, []);

//   // Setup globe rotation
//   useEffect(() => {
//    if (globeEl.current) {
//   const controls = globeEl.current.controls();
//   controls.autoRotate = true;
//   controls.autoRotateSpeed = 0.8;
//   controls.enableZoom = false;     // ❌ disable zoom
//   controls.enablePan = false;      // ❌ disable pan
//   controls.enableRotate = false;   // ❌ disable manual rotate
// }

//   }, []);

//   // Load polygons (yellow borders, lighting)
//  useEffect(() => {
//   fetch('https://unpkg.com/world-atlas/countries-110m.json')
//     .then(res => res.json())
//     .then((worldData) => {
//       const countries = topojson.feature(worldData, worldData.objects.countries).features;
//       globeEl.current
//         .polygonsData(countries)
//         .polygonAltitude(0.02)
//         .polygonCapColor(() => 'rgba(255, 255, 0, 0.3)')
//         .polygonSideColor(() => 'rgba(255, 215, 0, 0.15)')
//         .polygonStrokeColor(() => 'gold');
//     });
// }, []);


//   const onSubmit = async (values) => {
//     try {
//       setIsSubmitting(true);
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: values.name,
//           contact_number: values.contactNo,
//           from_email: values.email,
//           subject: values.subject,
//           message: values.query,
//           category: values.category,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );
//       toast({ title: "Message Sent", description: "We've received your message and will get back to you soon." });
//       form.reset();
//     } catch (error) {
//       console.error("Email sending error:", error);
//       toast({ title: "Error", description: "Failed to send message. Please try again." });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative bg-cover bg-center py-20"
//       style={{ backgroundImage: "url('/assets/Images/cbg2.jpg')" }}
//     >
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
//         {/* Left: Globe + cards */}
//         <div className="relative flex justify-center items-center w-full lg:w-1/2 h-[500px] md:h-[600px]">
//           <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
//           <Globe
//             ref={globeEl}
// globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//             backgroundColor="rgba(0,0,0,0)"
//             width={500}
//             height={500}
//             animateIn
//           />
//           {/* Floating cards */}
//           {[
//             { pos: 'top-[20%] left-[8%]', text: <>WhatsApp<br />+91 9705130846</> },
//             { pos: 'top-[20%] right-[8%]', text: <>Email<br />evoltriv@gmail.com</> },
//             { pos: 'bottom-[20%] left-[8%]', text: <>Timing<br />9am - 5pm</> },
//             { pos: 'bottom-[20%] right-[8%]', text: <>Location<br />Andhra Pradesh, India</> },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               className={`absolute ${item.pos} bg-white/20 backdrop-blur-lg border border-black text-black p-4 rounded-lg shadow-lg shadow-green-500 text-sm font-semibold`}
//               animate={{ y: [0, idx % 2 === 0 ? -10 : 10, 0] }}
//               transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
//             >
//               {item.text}
//             </motion.div>
//           ))}
//         </div>

//         {/* Right: Form */}
//         <div className="flex justify-center items-center px-10 py-16">
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="bg-white bg-opacity-90 w-full sm:w-[90%] md:w-[80%] lg:w-[450px] px-10 py-10 shadow-lg flex flex-col gap-6"
//               data-aos={effect}
//             >
//               {/* form fields same as before */}
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input placeholder="Your Name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="contactNo"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input placeholder="+91..." {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input type="email" placeholder="your@email.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="subject"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input placeholder="Subject" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="category"
//                 render={({ field }) => (
//                   <FormItem>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a category" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
//                         <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
//                         <SelectItem value="Student Support">Student Support</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="query"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Textarea placeholder="Your query" className="resize-none" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit" className="w-full bg-green-300 text-black dark:bg-blue-900 dark:text-white hover:bg-pcolor/90" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useEffect, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { useToast } from "../ui/use-toast";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   contactNo: z
//     .string()
//     .regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid contact number." }),
//   email: z.string().email({ message: "Enter a valid email address." }).optional().or(z.literal("")),
//   subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
//   query: z.string().min(10, { message: "Query must be at least 10 characters." }).optional().or(z.literal("")),
//   category: z.string().nonempty({ message: "Please select a category." }),
// });

// export default function ContactUs() {
//   const [effect, setEffect] = useState("zoom-in");
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

//   // Init AOS and effect
//   useEffect(() => {
//     Aos.init({ duration: 3000 });
//     if (window.innerWidth >= 1024) {
//       setEffect("fade-left");
//     } else {
//       setEffect("zoom-in");
//     }
//   }, []);

//   const onSubmit = async (values) => {
//     try {
//       setIsSubmitting(true);
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: values.name,
//           contact_number: values.contactNo,
//           from_email: values.email,
//           subject: values.subject,
//           message: values.query,
//           category: values.category,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );
//       toast({ title: "Message Sent", description: "We've received your message and will get back to you soon." });
//       form.reset();
//     } catch (error) {
//       console.error("Email sending error:", error);
//       toast({ title: "Error", description: "Failed to send message. Please try again." });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative bg-cover bg-center py-20"
//       style={{ backgroundImage: "url('/assets/Images/cbg2.jpg')" }}
//     >
// <div className="container mx-auto flex justify-end items-center">
//         {/* Left: Contact Info (replaced Globe) */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/90 dark:bg-gray-800 backdrop-blur-lg border border-gray-300 dark:border-gray-700 p-8 rounded-2xl shadow-lg w-full lg:w-1/2 flex flex-col gap-6"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//             Contact Information
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300">
//             Have questions? Reach out to us directly using the details below, or fill out the form to send us a message.
//           </p>
//           <div className="space-y-4 text-gray-800 dark:text-gray-200 font-medium">
//             <p>📞 Phone: <span className="font-semibold">+91 9705130846</span></p>
//             <p>📧 Email: <span className="font-semibold">evoltriv@gmail.com</span></p>
//             <p>🕒 Timings: <span className="font-semibold">9 AM – 5 PM</span></p>
//             <p>📍 Location: <span className="font-semibold">Andhra Pradesh, India</span></p>
//           </div>
//         </motion.div> */}

//         {/* Right: Form */}
//         <div className="flex justify-center items-center px-10 py-16">
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="bg-white bg-opacity-90 w-full sm:w-[90%] md:w-[80%] lg:w-[450px] px-10 py-10 shadow-lg flex flex-col gap-6"
//               data-aos={effect}
//             >
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input placeholder="Your Name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="contactNo"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input placeholder="+91..." {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input type="email" placeholder="your@email.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="subject"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input placeholder="Subject" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="category"
//                 render={({ field }) => (
//                   <FormItem>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a category" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
//                         <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
//                         <SelectItem value="Student Support">Student Support</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="query"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Textarea placeholder="Your query" className="resize-none" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit" className="w-full bg-green-300 text-black dark:bg-blue-900 dark:text-white hover:bg-pcolor/90" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useToast } from "../ui/use-toast";
import vision from "../../assets/Videos/contact.mp4"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  contactNo: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid contact number." }),
  email: z
    .string()
    .email({ message: "Enter a valid email address." })
    .optional()
    .or(z.literal("")),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  query: z
    .string()
    .min(10, { message: "Query must be at least 10 characters." })
    .optional()
    .or(z.literal("")),
  category: z.string().nonempty({ message: "Please select a category." }),
});

export default function ContactUs() {
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
    Aos.init({ duration: 2000 });
    if (window.innerWidth >= 1024) {
      setEffect("fade-left");
    } else {
      setEffect("zoom-in");
    }
  }, []);

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          contact_number: values.contactNo,
          from_email: values.email,
          subject: values.subject,
          message: values.query,
          category: values.category,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#C1D8C3] dark:bg-[#00005c] text-black dark:text-white text-center py-16 ">
        <h1 className="text-3xl font-bold pt-12">How can we help you?</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Reach out to our wellness consultant for a premium customer experience.
          We're always happy to help you find solutions for all your energy,
          mobility and training needs.
        </p>
      </section>

      {/* Quick Actions */}
      
      <div className=" bg-[#C1D8C3] dark:bg-[#00005c] text-black dark:text-black grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10 px-6">
        <a
          href="tel:+919705130846"
          className="flex items-center gap-3 justify-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <Phone className="w-6 h-6 text-blue-600" />
          <p className="font-semibold">Give us a Call</p>
        </a>
        <a
          href="https://wa.me/919705130846"
          className="flex items-center gap-3 justify-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <MessageCircle className="w-6 h-6 text-green-600" />
          <p className="font-semibold">WhatsApp Us</p>
        </a>
        <a
          href="mailto:evoltriv@gmail.com"
          className="flex items-center gap-3 justify-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <Mail className="w-6 h-6 text-red-600" />
          <p className="font-semibold">Send us an Email</p>
        </a>
      </div>

      {/* Map + Form */}

      <div 
  className="bg-cover bg-center py-12 px-4" 
  style={{ backgroundImage: "url('/assets/Images/cbg2.jpg')" }}
>
      <section className="container mx-auto flex justify-center py-16 px-6">
          <div className=" shadow-lg rounded-xl p-8 w-full md:w-2/3 lg:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
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
                          <SelectItem value="Solar Energy Solutions">
                            Solar Energy Solutions
                          </SelectItem>
                          <SelectItem value="E-Bikes & Electric Mobility">
                            E-Bikes & Electric Mobility
                          </SelectItem>
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
                        <Textarea
                          placeholder="Your query"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-green-600 text-black dark:text-white hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </div>



      {/* Map + Video Section */}
      <section className="dark:bg-black container mx-auto grid md:grid-cols-2 gap-8 py-16 px-6">
        {/* Left Map */}
        <div className="rounded-xl shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.545103970977!2d78.47668147470238!3d17.385044283490597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97894b3a74fb%3A0x7e764f8c52b12c11!2sCharminar!5e0!3m2!1sen!2sin!4v1694177595021!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Video */}
        <div className="rounded-xl shadow overflow-hidden">
          <video src={vision} controls autoPlay loop muted className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Testimonials */}
     <div className=" dark:bg-black bg-gray-50 py-8 px-6">
  <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Student Support Reviews */}
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="https://i.pravatar.cc/100?img=11"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Aisha Khan</p>
          <p className="text-sm text-gray-500">May 2024</p>
        </div>
      </div>
      <p>
        Evoltriv’s student support program really helped me balance studies and career.
        The mentors guided me step by step and I feel much more confident now.
      </p>
      <div className="flex text-yellow-400 mt-2">★★★★★</div>
    </div>

    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Ravi Sharma</p>
          <p className="text-sm text-gray-500">Apr 2024</p>
        </div>
      </div>
      <p>
        The one-to-one guidance sessions are excellent. Evoltriv genuinely cares about
        students’ success and provides the right resources on time.
      </p>
      <div className="flex text-yellow-400 mt-2">★★★★★</div>
    </div>

    {/* Solar Reviews */}
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="https://i.pravatar.cc/100?img=21"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Mohammed Ali</p>
          <p className="text-sm text-gray-500">Jul 2024</p>
        </div>
      </div>
      <p>
        Switching to Evoltriv Solar was the best decision for my home. My electricity bills
        dropped drastically, and the installation was seamless.
      </p>
      <div className="flex text-yellow-400 mt-2">★★★★★</div>
    </div>

    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="https://i.pravatar.cc/100?img=22"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Sophia Lee</p>
          <p className="text-sm text-gray-500">Jun 2024</p>
        </div>
      </div>
      <p>
        The solar panels are efficient and eco-friendly. Evoltriv’s team explained everything
        clearly and made the entire process stress-free.
      </p>
      <div className="flex text-yellow-400 mt-2">★★★★★</div>
    </div>

    {/* eBike Reviews */}
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="https://i.pravatar.cc/100?img=31"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Daniel Johnson</p>
          <p className="text-sm text-gray-500">Mar 2024</p>
        </div>
      </div>
      <p>
        I bought an Evoltriv eBike for my daily commute. It’s smooth, fast, and saves me
        both time and money. Highly recommend it!
      </p>
      <div className="flex text-yellow-400 mt-2">★★★★★</div>
    </div>

    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="https://i.pravatar.cc/100?img=32"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Fatima Noor</p>
          <p className="text-sm text-gray-500">Feb 2024</p>
        </div>
      </div>
      <p>
        My Evoltriv eBike is stylish and reliable. It’s perfect for city rides and I love
        the eco-friendly aspect of it too.
      </p>
      <div className="flex text-yellow-400 mt-2">★★★★★</div>
    </div>
  </div>
</div>

      {/* App Promo */}
      <div className="bg-white dark:bg-black dark:text-white py-10 px-6 text-center shadow-inner">
        <h2 className="text-2xl font-bold mb-4">Download Our App</h2>
        <p className="mb-6">Book services easily through our mobile application</p>
        <div className="flex justify-center gap-6">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

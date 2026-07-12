import React, { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import type { ContactInputForms } from "~/types/api/product.type";
import contactApis from "~/apis/contact.apis";
import {
  ChevronDown,
  ArrowRight,
  Loader2,
  User,
  Mail,
  Phone,
  Layers,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Seo from '~/components/seo/Seo';


export default function Contact(): React.JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInputForms>();

  const mutation = useMutation({
    mutationFn: contactApis.sendContactForm,
    retry: false,
    onSuccess: (data) => {
      console.log("MUTATION SUCCESS DATA:", data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    },
  });

  const onSubmit: SubmitHandler<ContactInputForms> = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-[20px]');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="bg-[#fcfbf9] text-[#1a1c1c] antialiased selection:bg-[#775a19]/10 selection:text-[#775a19]">
      <Seo
        title="Liên Hệ"
        description="Liên hệ Đại Nam để được tư vấn miễn phí, đặt lịch tham quan showroom cửa nhôm Xingfa, cửa cuốn, cửa kính cường lực. Hotline 0917 592 668."
        path="/contact"
      />
      <main className="pt-20">

        {/* Hero Section */}
        <section className="px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto pt-24 pb-16 border-b border-[#e8e6e1]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-4xl">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#775a19] uppercase mb-4 block animate-fade-in">
                Ghé Thăm Phòng Trưng Bày
              </span>
              <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-serif font-light text-[#111111] leading-[1.15] tracking-tight">
                Trải Nghiệm Trực Tiếp <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#2a2a2a]">Chất Lượng Cửa Nhôm</span> Cao Cấp.
              </h1>
            </div>
            <div className="lg:max-w-sm lg:pb-3">
              <p className="text-[15px] md:text-[16px] text-[#555555] leading-relaxed font-light">
                Kính mời quý khách đến tham quan showroom của chúng tôi để tận mắt cảm nhận sự tinh xảo, độ hoàn thiện và đa dạng của các phân khúc cửa nhôm cao cấp.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Info Section */}
        <section className="px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Column: Premium Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-14 lg:p-16 rounded-sm border border-[#e8e6e1] shadow-[0_30px_70px_-35px_rgba(0,0,0,0.2)]">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#775a19] uppercase mb-4 block">
                Liên Hệ
              </span>
              <h2 className="text-[24px] md:text-[28px] font-serif font-normal mb-12 text-[#111111] tracking-wide">
                Đăng Ký Tham Quan / Nhận Tư Vấn
              </h2>

              {isSubmitted ? (
                <div className="bg-[#f2f8f4] border border-green-200 text-green-800 p-8 rounded-sm text-center space-y-3 shadow-sm animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-green-600" />
                  <h3 className="font-serif font-medium text-xl">Gửi thông tin thành công</h3>
                  <p className="text-sm text-[#555555]">
                    Cảm ơn bạn đã liên hệ. Đội ngũ chuyên viên Đại Nam sẽ phản hồi đến bạn trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" id="contactForm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                    {/* Name */}
                    <div className="relative group">
                      <User className="absolute left-0 top-3.5 w-[18px] h-[18px] text-[#a3a3a3] peer-focus:text-[#775a19] transition-colors" strokeWidth={1.5} />
                      <input
                        type="text"
                        id="name"
                        placeholder=" "
                        {...register("fullName", {
                          required: "Vui lòng nhập họ tên",
                          minLength: { value: 2, message: "Họ tên quá ngắn" }
                        })}
                        className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-[#c4c7c7] focus:border-[#775a19] focus:ring-0 transition-colors py-2.5 pl-7 text-[15px] text-black"
                      />
                      <label className="absolute left-7 top-3 text-[11px] font-semibold text-[#666666] uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left
                      peer-focus:-translate-y-6 peer-focus:-translate-x-7 peer-focus:scale-90 peer-focus:text-[#775a19]
                      peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-x-7 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-[#775a19]" htmlFor="name">Họ và Tên</label>
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-2 flex items-center gap-1 font-light">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <Mail className="absolute left-0 top-3.5 w-[18px] h-[18px] text-[#a3a3a3] peer-focus:text-[#775a19] transition-colors" strokeWidth={1.5} />
                      <input
                        type="email"
                        id="email"
                        placeholder=" "
                        {...register("email", {
                          required: "Vui lòng nhập email",
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email không đúng định dạng" }
                        })}
                        className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-[#c4c7c7] focus:border-[#775a19] focus:ring-0 transition-colors py-2.5 pl-7 text-[15px] text-black"
                      />
                      <label className="absolute left-7 top-3 text-[11px] font-semibold text-[#666666] uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left
                      peer-focus:-translate-y-6 peer-focus:-translate-x-7 peer-focus:scale-90 peer-focus:text-[#775a19]
                      peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-x-7 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-[#775a19]" htmlFor="email">Địa Chỉ Email</label>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-2 flex items-center gap-1 font-light">
                          <AlertCircle className="w-3 h-3" /> {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <Phone className="absolute left-0 top-3.5 w-[18px] h-[18px] text-[#a3a3a3] peer-focus:text-[#775a19] transition-colors" strokeWidth={1.5} />
                      <input
                        type="tel"
                        id="phone"
                        placeholder=" "
                        {...register("phone", {
                          required: "Vui lòng nhập số điện thoại",
                          pattern: { value: /^(0[3|5|7|8|9])[0-9]{8}$/, message: "Số điện thoại không hợp lệ" }
                        })}
                        className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-[#c4c7c7] focus:border-[#775a19] focus:ring-0 transition-colors py-2.5 pl-7 text-[15px] text-black"
                      />
                      <label className="absolute left-7 top-3 text-[11px] font-semibold text-[#666666] uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left
                      peer-focus:-translate-y-6 peer-focus:-translate-x-7 peer-focus:scale-90 peer-focus:text-[#775a19]
                      peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-x-7 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-[#775a19]" htmlFor="phone">Số Điện Thoại</label>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-2 flex items-center gap-1 font-light">
                          <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className="relative group">
                      <Layers className="absolute left-0 top-3.5 w-[18px] h-[18px] text-[#a3a3a3] pointer-events-none" strokeWidth={1.5} />
                      <select
                        id="project"
                        defaultValue=""
                        className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-[#c4c7c7] focus:border-[#775a19] focus:ring-0 transition-colors py-2.5 pl-7 pr-6 text-[15px] appearance-none text-black cursor-pointer"
                      >
                        <option disabled value=""></option>
                        <option value="nhom_xingfa">Cửa Nhôm Xingfa cao cấp</option>
                        <option value="nhom_cao_cap">Cửa Nhôm Nhập Khẩu Slim/Maxpro</option>
                        <option value="nhom_kinh_cuong_luc">Hệ Thống Vách Kính Cường Lực</option>
                        <option value="other">Giải Pháp Toàn Nhà / Tư Vấn Khác</option>
                      </select>
                      <label className="absolute left-7 top-3 text-[11px] font-semibold text-[#666666] uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left -translate-y-6 -translate-x-7 scale-90" htmlFor="project">Loại Cửa Quan Tâm</label>

                      <ChevronDown size={16} strokeWidth={1.5} className="absolute right-0 top-3.5 pointer-events-none text-[#666666] peer-focus:text-[#775a19] transition-colors" />
                    </div>

                  </div>

                  {/* Message */}
                  <div className="relative pt-2 group">
                    <MessageSquare className="absolute left-0 top-[18px] w-[18px] h-[18px] text-[#a3a3a3] peer-focus:text-[#775a19] transition-colors" strokeWidth={1.5} />
                    <textarea
                      id="message"
                      placeholder=" "
                      rows={4}
                      {...register("message", { required: "Vui lòng nhập nội dung chi tiết" })}
                      className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-[#c4c7c7] focus:border-[#775a19] focus:ring-0 transition-colors py-2 pl-7 text-[15px] resize-none text-black leading-relaxed"
                    ></textarea>
                    <label className="absolute left-7 top-4 text-[11px] font-semibold text-[#666666] uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left
                    peer-focus:-translate-y-6 peer-focus:-translate-x-7 peer-focus:scale-90 peer-focus:text-[#775a19]
                    peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:-translate-x-7 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-[#775a19]" htmlFor="message">Yêu Cầu Chi Tiết Hoặc Kích Thước Khảo Sát</label>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1 font-light">
                        <AlertCircle className="w-3 h-3" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="group w-full sm:w-auto flex items-center justify-center space-x-6 bg-[#111111] hover:bg-[#775a19] text-white px-10 py-4 transition-all duration-500 ease-out disabled:opacity-60 rounded-none tracking-widest hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {mutation.isPending ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <>
                          <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Gửi Bản Đăng Ký</span>
                          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Clean Editorial Info */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2 lg:pl-6">
              <div className="space-y-14">

                <div className="reveal-on-scroll opacity-0 translate-y-[20px] transition-all duration-700 ease-out">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#775a19] mb-4 block uppercase">Phòng Trưng Bày</span>
                  <h3 className="text-[26px] font-serif font-normal mb-3 text-[#111111]">Showroom Đại Nam</h3>
                  <p className="text-[15px] text-[#555555] font-light leading-relaxed">
                    25 Phan Đình Phùng,<br />
                   Đức Trọng, Lâm Đồng, 
                     
                  </p>
                </div>

                <div className="reveal-on-scroll opacity-0 translate-y-[20px] transition-all duration-700 ease-out delay-75">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#775a19] mb-4 block uppercase">Hotline & Tư Vấn</span>
                  <div className="space-y-3">
                    <a className="block text-[28px] font-serif font-light text-[#111111] hover:text-[#775a19] transition-colors tracking-wide" href="tel:+84901234567">
                     0913 845 613
                    </a>
                    <a className="inline-block text-[14px] text-[#444444] font-light border-b border-[#c4c7c7] hover:border-[#775a19] hover:text-[#775a19] transition-all pb-0.5" href="mailto:lienhe@cuadepviet.com">
                      nguyenphatnam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="reveal-on-scroll opacity-0 translate-y-[20px] transition-all duration-700 ease-out delay-150">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#775a19] mb-4 block uppercase">Giờ Tiếp Đón</span>
                  <div className="space-y-3 text-[14px] text-[#555555] max-w-sm font-light">
                    <div className="flex justify-between border-b border-[#e8e6e1] pb-2">
                      <span>Thứ Hai — Chủ Nhật</span>
                      <span className="text-[#111111] font-normal">08:00 — 17:30</span>
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Map Section with elegant overlay borders */}
        <section className="px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto pb-24">
          <div className="relative h-[500px] bg-[#f4f4f4] overflow-hidden border border-[#e8e6e1] grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-1000 ease-out">
            <iframe
              title="Google Maps"
              allowFullScreen
              height="100%"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4397.265045542371!2d108.35979788893833!3d11.725786305544247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317146cfeb520645%3A0x824c6f743a2b0989!2zQ-G7rWEgQ3Xhu5FuIEPhu61hIEvDqW8gxJDhuqFpIE5hbQ!5e0!3m2!1svi!2s!4v1783841149887!5m2!1svi!2s"
              style={{ border: 0 }}
              width="100%"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </section>

      </main>
    </div>
  );
}
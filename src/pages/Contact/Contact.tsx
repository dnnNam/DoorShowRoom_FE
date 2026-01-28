import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ContactInputForms } from "~/types/api/product.type";
import { useMutation } from "@tanstack/react-query";
import contactApis from "~/apis/contact.apis";
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInputForms>();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    console.log("Dữ liệu form:", data);
    mutation.mutate(data);
  };
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Hãy để lại thông tin hoặc liên hệ trực tiếp để được tư vấn miễn phí
            và nhận báo giá tốt nhất.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Địa Chỉ</h3>
                  <p className="text-stone-600 text-sm">
                    123 Đường Nguyễn Văn Linh,
                    <br />
                    Quận 7, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Điện Thoại</h3>
                  <p className="text-stone-600 text-sm">
                    Hotline: 090 123 4567
                    <br />
                    Kỹ thuật: 090 987 6543
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Email</h3>
                  <p className="text-stone-600 text-sm">
                    lienhe@cuadepviet.com
                    <br />
                    baogia@cuadepviet.com
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">
                    Giờ Làm Việc
                  </h3>
                  <p className="text-stone-600 text-sm">
                    Thứ 2 - Thứ 7: 8:00 - 17:30
                    <br />
                    Chủ Nhật: Nghỉ
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 h-full">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Gửi Tin Nhắn
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center space-y-2">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg">Gửi thành công!</h3>
                  <p className="text-sm">
                    Cảm ơn bạn đã liên hệ với chúng tôi. <br />
                    Đội ngũ tư vấn sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-stone-700 mb-1"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("fullName", {
                          required: "Vui lòng nhập họ tên",
                          minLength: {
                            value: 2,
                            message: "Họ tên quá ngắn",
                          },
                          pattern: {
                            value: /^[a-zA-ZÀ-ỹ\s]+$/,
                            message: "Họ tên không hợp lệ",
                          },
                        })}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all ${
                          errors.fullName
                            ? "border-red-500"
                            : "border-stone-300"
                        }`}
                        placeholder="Nguyễn Văn A"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-stone-700 mb-1"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone", {
                          required: "Vui lòng nhập số điện thoại",
                          pattern: {
                            value: /^(0[3|5|7|8|9])[0-9]{8}$/,
                            message: "Số điện thoại không hợp lệ",
                          },
                        })}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all ${
                          errors.phone ? "border-red-500" : "border-stone-300"
                        }`}
                        placeholder="090 xxx xxxx"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Vui lòng nhập email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email không đúng định dạng",
                        },
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all ${
                        errors.email ? "border-red-500" : "border-stone-300"
                      }`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Vui lòng nhập nội dung cần tư vấn",
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-stone-300"
                      }`}
                      placeholder="Tôi cần tư vấn về..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Gửi Tin Nhắn
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        {/* Map Placeholder */}
        <div className="mt-12 bg-stone-200 h-96 rounded-xl flex items-center justify-center text-stone-500">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>Bản đồ Google Maps sẽ được hiển thị tại đây</p>
          </div>
        </div>
      </div>
    </div>
  );
}

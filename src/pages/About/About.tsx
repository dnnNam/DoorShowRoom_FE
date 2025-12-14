import { Award, CheckCircle, Target, Users } from "lucide-react";
export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative h-80 bg-stone-900 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Workshop"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Hơn 10 năm kinh nghiệm kiến tạo không gian sống an toàn và thẩm mỹ
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Câu Chuyện Của Cửa Đẹp Việt
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Được thành lập từ năm 2012, Cửa Đẹp Việt khởi đầu là một xưởng
                mộc nhỏ với niềm đam mê tạo ra những cánh cửa gỗ chất lượng. Qua
                hơn một thập kỷ phát triển, chúng tôi đã vươn mình trở thành một
                trong những đơn vị hàng đầu trong lĩnh vực cung cấp giải pháp
                tổng thể về cửa tại Việt Nam.
              </p>
              <p>
                Chúng tôi không chỉ bán cửa, chúng tôi mang đến sự an tâm, vẻ
                đẹp và giá trị bền vững cho ngôi nhà của bạn. Mỗi sản phẩm đều
                là kết tinh của công nghệ hiện đại và bàn tay khéo léo của những
                người thợ lành nghề.
              </p>
              <p>
                Với phương châm "Chất lượng tạo niềm tin", Cửa Đẹp Việt luôn nỗ
                lực không ngừng để cải tiến sản phẩm, nâng cao chất lượng dịch
                vụ, đáp ứng những yêu cầu ngày càng cao của khách hàng.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-br-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Craftsman working"
              className="rounded-xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
            <Target className="w-10 h-10 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-stone-900 mb-2">Tầm Nhìn</h3>
            <p className="text-stone-600 text-sm">
              Trở thành thương hiệu cửa hàng đầu Việt Nam, được khách hàng tin
              tưởng lựa chọn cho mọi công trình.
            </p>
          </div>
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
            <Users className="w-10 h-10 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-stone-900 mb-2">Sứ Mệnh</h3>
            <p className="text-stone-600 text-sm">
              Mang đến giải pháp cửa an toàn, thẩm mỹ, tối ưu chi phí và nâng
              cao chất lượng cuộc sống.
            </p>
          </div>
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
            <Award className="w-10 h-10 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Chất Lượng
            </h3>
            <p className="text-stone-600 text-sm">
              Cam kết sản phẩm chính hãng, đạt tiêu chuẩn kỹ thuật cao, bền bỉ
              với thời gian.
            </p>
          </div>
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
            <CheckCircle className="w-10 h-10 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-stone-900 mb-2">Tận Tâm</h3>
            <p className="text-stone-600 text-sm">
              Phục vụ khách hàng bằng cả trái tim, luôn lắng nghe và giải quyết
              mọi vấn đề nhanh chóng.
            </p>
          </div>
        </div>
        {/* Stats */}
        <div className="bg-amber-900 rounded-2xl p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-amber-100">Năm Kinh Nghiệm</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">
                5000+
              </div>
              <div className="text-amber-100">Dự Án Hoàn Thành</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-amber-100">Nhân Sự</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-amber-100">Khách Hàng Hài Lòng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

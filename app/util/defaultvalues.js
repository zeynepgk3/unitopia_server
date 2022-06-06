const User = require('../models/user');
const Blog = require('../models/blog');
const Announcement = require('../models/announcement');

const bcrypt = require('bcrypt');

const adminList = [
    { email: "emre@test.com", image: "https://i.pravatar.cc/150?img=11", name: "Emre Karaca", role: "admin" },
    { email: "zeyn@test.com", image: "https://i.pravatar.cc/150?img=47", name: "Zeynep Gök", role: "admin" },
    { email: "aysu@test.com", image: "https://i.pravatar.cc/150?img=22", name: "Aysu Nur Terzi", role: "admin" },
    { email: "betu@test.com", image: "https://i.pravatar.cc/150?img=39", name: "Betül Azakoğlu", role: "admin" },
    { email: "sena@test.com", image: "https://i.pravatar.cc/150?img=25", name: "Sena Nur Yurdadur", role: "admin" },
];

const blogList = [
    {
        id:1,
        image: "https://i.pravatar.cc/150?img=11https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80", 
        header: "Bilgisayar Mühendisi Ne İş Yapar? Görev ve Sorumlulukları Nelerdir?",
        authorId: 1,
        content: "<p>Bilgisayar mühendisi, bilişim sistemleri yöneticiliği, bilgisayar sistemleri analisti ve yazılım uygulamaları geliştiriciliği gibi farklı sahalarda uzman olabilmektedir. Uzmanlık sahasına bağlı olarak görev tanımı farklılık gösteren bilgisayar mühendisinin genel mesleki sorumlulukları şunlardır; </p><ul><li>Mevcut teknoloji ve test araçlarını kullanarak düzenli donanım testleri gerçekleştirmek,</li><li>Yeni ve yeniden yapılandırılmış anakartlar için doğrulama testi gerçekleştirmek,</li><li>Düzenli bakım faaliyetleri gerçekleştirmek ve bilgisayar donanımı sorunlarını gidermek,</li><li>Mevcut bilgisayar ekipmanını güncellemek ve yeni teknolojiyi eski ekipmanlara entegre etmek,</li><li>Yeni mobil uygulamalar oluşturmak için yazılım geliştirme ekibi ile işbirliği içerisinde çalışmak,</li><li>Dahili ağ fonksiyonları ve herhangi bir internet özellikli uygulama kullanımı için yönetici personeline teknik destek sağlamak,</li><li>Potansiyel bilgisayar korsanlık tehditlerinden korunmasını sağlamak için şirketin bulut depolama hesaplarını kontrol etmek,</li><li>İhtiyaçları öngörmek ve gerektiğinde yedek donanım ekipmanını tedarik etmek.</li></ul>"
    },
    {
        id:2,
        image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80", 
        header: "Mühendisliğin Peşinden Gitmeye Karar Veren Bir Kadın #NedenOlmasın?",
        authorId: 2,
        content: "<p>Çoğumuzun hayatında travmalara, kötü anılara sebep olan ÖSS yarın açıklanıyor. Hala açıklandıktan sonraki telaşım, hayalimi tercihlere dökebilme sıkıntısı aklımda. Konu komşuya, rehberlik hocalarına elimde listelerle gittiğim günleri unutmadım. O zamanlar internet dünyasına çok aşina değildim. İstediğim bölümlerin nasıl olduğunu, üniversiteleri kataloglardan, etrafımdakilerden öğreniyordum. Şimdi nerdeyse her evde bu bilgi kaynağı olduğuna ve yarından itibaren bölümler ve üniversiteler ile ilgili arama motorlarına isimler girilmeye başlayacağına göre mim gibi ama aslında öyle olmayan bir dalga başlatmak istedim. Kocaman bir blog ailesiyiz burda. Her çeşit bölümden, her çeşit üniversiteden kişiler var aramızda. Heyecanlı, stresli gençlere bir nebze yardımımız dokunabilir. Herkes bölümü ve üniversitesi hakkında birazcık bilgi verse bir tercih rehberi haline dönüşebiliriz.</p>"
    },
];

const announcementList = [ //TODO
    {
        id:1,
        image: "https://buildfire.com/wp-content/uploads/2018/03/what-is-a-push-notification-and-why-it-matters-1200x675.jpg", 
        header: "Erasmus başvuruları başladı!",
        content: "<p>İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik </p>"
    },
    {
        id:2,
        image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80", 
        header: "Bütünleme takvimi değişikliği",
        content: "<p>İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik İçerik </p>"
    },
];

const studentClubList = [ //TODO
    { email: "emre@test.com", image: "https://i.pravatar.cc/150?img=11", name: "Emre Karaca", role: "admin" },
    { email: "zeyn@test.com", image: "https://i.pravatar.cc/150?img=47", name: "Zeynep Gök", role: "admin" },
    { email: "aysu@test.com", image: "https://i.pravatar.cc/150?img=22", name: "Aysu Nur Terzi", role: "admin" },
    { email: "betu@test.com", image: "https://i.pravatar.cc/150?img=39", name: "Betül Azakoğlu", role: "admin" },
    { email: "sena@test.com", image: "https://i.pravatar.cc/150?img=25", name: "Sena Nur Yurdadur", role: "admin" },
];

const mealList = [ //TODO
    { email: "emre@test.com", image: "https://i.pravatar.cc/150?img=11", name: "Emre Karaca", role: "admin" },
    { email: "zeyn@test.com", image: "https://i.pravatar.cc/150?img=47", name: "Zeynep Gök", role: "admin" },
    { email: "aysu@test.com", image: "https://i.pravatar.cc/150?img=22", name: "Aysu Nur Terzi", role: "admin" },
    { email: "betu@test.com", image: "https://i.pravatar.cc/150?img=39", name: "Betül Azakoğlu", role: "admin" },
    { email: "sena@test.com", image: "https://i.pravatar.cc/150?img=25", name: "Sena Nur Yurdadur", role: "admin" },
];

exports.addDefaultValues = async () => {
    try {
        adminList.map(async i => {
            i.password = await bcrypt.hash("admin", 10);
            const user = await User.findOne({ where: { email: i.email } });
            if (user == null) {
                User.create(i);
            }
        });

        blogList.map(async i => {
            const blog = await Blog.findOne({ where: { id: i.id } });
            if (blog == null) {
                Blog.create(i);
            }
        });

        announcementList.map(async i => {
            const announcement = await Announcement.findOne({ where: { id: i.id } });
            if (announcement == null) {
                Announcement.create(i);
            }
        });

    } catch (error) {
        console.log("error: ", error);
    }
}

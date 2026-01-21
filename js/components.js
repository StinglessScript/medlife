/**
 * components.js
 * Standardized Header and Footer for TrueDoc x BIDV MetLife
 */

const headerHTML = `
    <header class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100">
        <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-8">
                <a class="flex items-center gap-2" href="index.html">
                    <div class="flex items-center gap-2">
                        <span class="text-primary-teal font-black text-xl tracking-tighter">BIDV <span class="text-gold-main">•</span> MetLife</span>
                        <span class="text-gray-200">|</span>
                        <span class="text-primary-teal font-black text-xl tracking-tighter uppercase">TrueDoc</span>
                    </div>
                </a>
                <div class="hidden lg:flex items-center gap-8 ml-8">
                    <a class="nav-link text-gray-600 text-sm font-semibold hover:text-primary-teal transition-colors"
                        href="index.html" data-page="home">Trang chủ</a>
                    <a class="nav-link text-gray-600 text-sm font-semibold hover:text-primary-teal transition-colors"
                        href="benefits.html" data-page="benefits">Quyền lợi</a>
                    <a class="nav-link text-gray-600 text-sm font-semibold hover:text-primary-teal transition-colors"
                        href="newsletter.html" data-page="newsletter">Bản tin</a>
                    <a class="nav-link text-gray-600 text-sm font-semibold hover:text-primary-teal transition-colors"
                        href="lookup.html" data-page="lookup">Tra cứu</a>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <div class="hidden sm:flex items-center gap-2 text-primary-teal bg-primary-teal/5 px-4 py-2 rounded-full border border-primary-teal/10">
                    <span class="material-symbols-outlined text-sm">phone_in_talk</span>
                    <span class="text-sm font-black tracking-tight">1900 2839</span>
                </div>
                <!-- Mobile Menu Toggle -->
                <button id="mobile-menu-toggle" class="lg:hidden size-10 flex items-center justify-center text-primary-teal">
                    <span class="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </nav>
        
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="fixed inset-0 bg-white z-[101] translate-x-full transition-transform duration-500 lg:hidden">
            <div class="p-6 flex flex-col h-full">
                <div class="flex items-center justify-between mb-12">
                     <div class="flex items-center gap-2">
                        <span class="text-primary-teal font-black text-lg tracking-tighter">BIDV <span class="text-gold-main">•</span> MetLife</span>
                    </div>
                    <button id="mobile-menu-close" class="size-10 flex items-center justify-center text-primary-teal">
                        <span class="material-symbols-outlined text-3xl">close</span>
                    </button>
                </div>
                <div class="flex flex-col gap-8">
                    <a class="mobile-nav-link text-2xl font-black text-dark-teal" href="index.html">Trang chủ</a>
                    <a class="mobile-nav-link text-2xl font-black text-dark-teal" href="benefits.html">Quyền lợi</a>
                    <a class="mobile-nav-link text-2xl font-black text-dark-teal" href="newsletter.html">Bản tin</a>
                    <a class="mobile-nav-link text-2xl font-black text-dark-teal" href="lookup.html">Tra cứu</a>
                </div>
                <div class="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-6">
                    <div class="flex items-center gap-4 text-primary-teal">
                        <span class="material-symbols-outlined">phone_in_talk</span>
                        <span class="text-xl font-black">1900 2839</span>
                    </div>
                    <button class="w-full py-4 gold-gradient text-white font-black rounded-2xl shadow-lg uppercase tracking-widest">Đăng ký ngay</button>
                </div>
            </div>
        </div>
    </header>
`;

const footerHTML = `
    <div class="px-6 lg:px-20 -mb-28 relative z-10">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div class="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl shadow-primary-teal/10 border border-gray-50 flex items-center gap-6 md:gap-8 hover:translate-y-[-5px] transition-transform">
                <div class="size-14 md:size-16 rounded-2xl bg-primary-teal/5 flex items-center justify-center text-primary-teal shrink-0">
                    <span class="material-symbols-outlined text-3xl md:text-4xl">headset_mic</span>
                </div>
                <div>
                    <p class="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1 md:mb-2">Đường dây nóng</p>
                    <p class="font-extrabold text-dark-teal text-lg md:text-xl tracking-tight">1900 2839</p>
                </div>
            </div>
            <div class="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl shadow-primary-teal/10 border border-gray-50 flex items-center gap-6 md:gap-8 hover:translate-y-[-5px] transition-transform">
                <div class="size-14 md:size-16 rounded-2xl bg-primary-teal/5 flex items-center justify-center text-primary-teal shrink-0">
                    <span class="material-symbols-outlined text-3xl md:text-4xl">alternate_email</span>
                </div>
                <div>
                    <p class="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1 md:mb-2">Email Hỗ Trợ</p>
                    <p class="font-extrabold text-dark-teal text-lg md:text-xl tracking-tight">cskh@truedoc.vn</p>
                </div>
            </div>
            <div class="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl shadow-primary-teal/10 border border-gray-50 flex items-center gap-6 md:gap-8 hover:translate-y-[-5px] transition-transform">
                <div class="size-14 md:size-16 rounded-2xl bg-primary-teal/5 flex items-center justify-center text-primary-teal shrink-0">
                    <span class="material-symbols-outlined text-3xl md:text-4xl">hub</span>
                </div>
                <div>
                    <p class="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1 md:mb-2">Trung tâm hỗ trợ</p>
                    <p class="font-extrabold text-dark-teal text-lg md:text-xl tracking-tight">TrueDoc Care Hub</p>
                </div>
            </div>
        </div>
    </div>

    <footer class="bg-primary-teal pt-40 pb-12 text-white/70 text-center text-sm">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <p class="font-medium text-white/70">© 2024 BIDV MetLife & TrueDoc. Bản quyền được bảo lưu.</p>
            <div class="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
                <a class="hover:text-white transition-colors" href="#">Điều khoản sử dụng</a>
                <a class="hover:text-white transition-colors" href="#">Chính sách bảo mật</a>
                <a class="hover:text-white transition-colors" href="#">Câu hỏi thường gặp</a>
            </div>
            <div class="mt-8 flex justify-center items-center gap-6 opacity-80">
                <span class="text-white font-black text-lg tracking-tighter">BIDV <span class="text-gold-main">•</span> MetLife</span>
                <span class="text-white/20">|</span>
                <span class="text-white font-black text-lg tracking-tighter">TrueDoc</span>
            </div>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;

        // Active Navigation Link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('text-primary-teal');
            }
        });

        // Mobile Menu Logic
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const menuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-full');
            });
        }

        if (menuClose && mobileMenu) {
            menuClose.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        }
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});

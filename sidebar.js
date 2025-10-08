// Sidebar HTML template
const sidebarHTML = `
<!-- Sidebar Component -->
<aside class="fixed left-0 top-0 h-screen w-60 bg-sidebar-bg text-white flex flex-col">
    <!-- Logo -->
    <div class="p-4 border-b border-white/10">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-white rounded flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <span class="font-semibold text-lg">People X</span>
        </div>
        <div class="text-xs text-white/60 mt-1 ml-10">管理画面</div>
    </div>
    <!-- Navigation -->
    <nav class="flex-1 py-4">
        <a href="index.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="index">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>応募者</span>
        </a>
        <a href="jobs.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="jobs">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>求人</span>
        </a>
        <a href="questions.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="questions">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>質問</span>
        </a>
        <a href="reports.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="reports">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>レポート</span>
        </a>
        <a href="settings.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="settings">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>設定</span>
        </a>
    </nav>

    <!-- Collapse Button -->
    <div class="p-4 border-t border-white/10">
        <button class="flex items-center gap-2 text-sm text-white/80 hover:text-white w-full">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <span>折りたたむ</span>
        </button>
    </div>
</aside>
`;

// Load sidebar component
function loadSidebar() {
    const container = document.getElementById('sidebar-container');
    if (container) {
        container.innerHTML = sidebarHTML;
        setActivePage();
    }
}

// Set active sidebar link based on current page
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	const pageName = currentPage.replace('.html', '');
	// Normalize: any questions-related page maps to 'questions'
	const normalizedPage = pageName.startsWith('questions') ? 'questions' : pageName;

    // Remove active class from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('bg-sidebar-active', 'text-white', 'border-l-4', 'border-white');
        link.classList.add('text-white/80', 'hover:bg-white/5', 'hover:text-white');
    });

    // Add active class to current page link
	const activeLink = document.querySelector(`.nav-link[data-page="${normalizedPage}"]`);
    if (activeLink) {
        activeLink.classList.remove('text-white/80', 'hover:bg-white/5', 'hover:text-white');
        activeLink.classList.add('bg-sidebar-active', 'text-white', 'border-l-4', 'border-white');
    }
}

// Load sidebar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSidebar);
} else {
    loadSidebar();
}


// <!-- Language Switcher -->
// <div class="px-4 py-2 border-b border-white/10">
//     <button class="flex items-center gap-2 text-sm text-white/80 hover:text-white">
//         <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                 d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
//         </svg>
//         EN
//     </button>
// </div>

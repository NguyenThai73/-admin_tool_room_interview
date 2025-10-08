// Sidebar HTML template
function getSidebarHTML() {
    return `
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
            <span class="font-semibold text-lg" data-i18n="appTitle">${i18n.t('appTitle')}</span>
        </div>
        <div class="text-xs text-white/60 mt-1 ml-10" data-i18n="appSubtitle">${i18n.t('appSubtitle')}</div>
    </div>
    <!-- Navigation -->
    <nav class="flex-1 py-4">
        <a href="index.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="index">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span data-i18n="applicants">${i18n.t('applicants')}</span>
        </a>
        <a href="jobs.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="jobs">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span data-i18n="jobs">${i18n.t('jobs')}</span>
        </a>
        <a href="questions.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="questions">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span data-i18n="questions">${i18n.t('questions')}</span>
        </a>
        <a href="reports.html" class="nav-link flex items-center gap-3 px-4 py-2.5" data-page="reports">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span data-i18n="reports">${i18n.t('reports')}</span>
        </a>
        <div>
            <button id="settingsToggle" class="nav-link flex items-center justify-between w-full px-4 py-2.5" data-page="settings">
                <div class="flex items-center gap-3">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span data-i18n="settings">${i18n.t('settings')}</span>
                </div>
                <svg id="settingsChevron" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <!-- Settings Submenu -->
            <div id="settingsSubmenu" class="hidden bg-white/5 ml-5 mt-0 space-y-1">
                <a href="members.html" class="submenu-link block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition" data-page="members">
                    <span data-i18n="members">${i18n.t('members')}</span>
                </a>
                <a href="groups.html" class="submenu-link block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition" data-page="groups">
                    <span data-i18n="groups">${i18n.t('groups')}</span>
                </a>
                <a href="settings.html" class="submenu-link block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition" data-page="settings">
                    <span data-i18n="companySettings">${i18n.t('companySettings')}</span>
                </a>
            </div>
        </div>
    </nav>

    <!-- Language Switcher -->
    <div class="px-4 py-2 border-t border-white/10">
        <button id="language-switcher" class="flex items-center gap-2 text-sm text-white/80 hover:text-white w-full">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span data-i18n="language">${i18n.t('language')}</span>
        </button>
    </div>

    <!-- Collapse Button -->
    <div class="p-4 border-t border-white/10">
        <button class="flex items-center gap-2 text-sm text-white/80 hover:text-white w-full">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <span data-i18n="collapse">${i18n.t('collapse')}</span>
        </button>
    </div>
</aside>
`;
}

// Load sidebar component
function loadSidebar() {
    const container = document.getElementById('sidebar-container');
    if (container) {
        container.innerHTML = getSidebarHTML();
        setActivePage();
        setupLanguageSwitcher();
        setupSettingsToggle();
    }
}

// Setup language switcher
function setupLanguageSwitcher() {
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', () => {
            const currentLang = i18n.getCurrentLanguage();
            const newLang = currentLang === 'ja' ? 'en' : 'ja';
            i18n.setLanguage(newLang);
            loadSidebar(); // Reload sidebar with new language
        });
    }
}

// Setup settings submenu toggle
function setupSettingsToggle() {
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsSubmenu = document.getElementById('settingsSubmenu');
    const settingsChevron = document.getElementById('settingsChevron');

    if (settingsToggle && settingsSubmenu && settingsChevron) {
        settingsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            settingsSubmenu.classList.toggle('hidden');
            settingsChevron.classList.toggle('rotate-180');
        });
    }

    // Auto-expand settings submenu if on a settings-related page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '');
    if (pageName === 'settings' || pageName === 'members' || pageName === 'groups') {
        if (settingsSubmenu) {
            settingsSubmenu.classList.remove('hidden');
            if (settingsChevron) {
                settingsChevron.classList.add('rotate-180');
            }
        }
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

    // Add active class to current page link (main nav)
	const activeLink = document.querySelector(`.nav-link[data-page="${normalizedPage}"]`);
    if (activeLink) {
        activeLink.classList.remove('text-white/80', 'hover:bg-white/5', 'hover:text-white');
        activeLink.classList.add('bg-sidebar-active', 'text-white', 'border-l-4', 'border-white');
    }

    // Also check submenu items
    document.querySelectorAll('.submenu-link').forEach(link => {
        link.classList.remove('text-white', 'bg-white/10');
        link.classList.add('text-white/70');
    });

    // Add active class to submenu item if current page is members or groups
    if (pageName === 'members' || pageName === 'groups' || pageName === 'settings') {
        const activeSubmenuLink = document.querySelector(`.submenu-link[data-page="${pageName}"]`);
        if (activeSubmenuLink) {
            activeSubmenuLink.classList.remove('text-white/70');
            activeSubmenuLink.classList.add('text-white', 'bg-white/10');
        }
    }
}

// Load sidebar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSidebar);
} else {
    loadSidebar();
}

// Listen for language change events to update sidebar
window.addEventListener('languageChanged', () => {
    loadSidebar();
});

// i18n Translation System
const translations = {
    ja: {
        // Logo section
        appTitle: 'People X',
        appSubtitle: '管理画面',

        // Navigation
        applicants: '応募者',
        jobs: '求人',
        questions: '質問',
        reports: 'レポート',
        settings: '設定',

        // Buttons
        collapse: '折りたたむ',
        language: '日本語',
        search: '検索',
        clear: 'クリア',
        confirm: '決定',
        add: '追加',
        edit: '編集',
        delete: '削除',
        save: '保存',
        cancel: 'キャンセル',

        // Applicants Page
        searchPlaceholder: '検索してください',
        all: 'すべて',
        evaluationStatus: '評価ステータス',
        interviewStatus: '面接状況',
        category: 'カテゴリー',
        positionName: '募集職種名',
        applicantName: '応募者名',
        email: 'メールアドレス',
        interviewDate: '面接日',
        overallRating: '総合評価',
        actions: '操作',
        interviewResult: '面接結果',
        filterOptions: 'フィルターオプション',

        // Status values
        notSet: '未設定',
        completed: '完遂',
        hired: '採用',
        rejected: '不採用',
        waiting: '待機',
        inProgress: '途中経過',

        // Categories
        newGraduate: '新卒',
        midCareer: '中途',
        partTime: 'アルバイト',

        // Pagination
        previous: '前へ',
        next: '次へ',
        items: '件',

        // Job Positions
        legal: '法務',
        hr: '人事',
        admin: '事務',
        frontendDev: '開発（フロントエンド）',
        backendDev: '開発（バックエンド）',
        designer: 'デザイナー',
        pr: '広報・PR',

        // Jobs Page
        jobList: '求人一覧',
        jobManagement: '求人管理',
        jobManagementDesc: '求人情報の管理',
        jobTitle: '求人タイトル',
        employmentType: '雇用形態',
        status: 'ステータス',
        createdDate: '作成日',
        applicantCount: '応募者数',
        addJob: '求人を追加',
        newJob: '新規作成',
        searchAndFilter: '検索・フィルター',
        jobSearchPlaceholder: '求人名や職種で検索...',
        acceptingInterviews: '面接受付中',
        stopped: '停止中',
        partTimeContract: 'アルバイト・パート',
        fullTimeEmployee: '正社員',
        contractEmployee: '契約社員',
        contractor: '業務委託',
        group: 'グループ',
        jobPosition: '求人',

        // Questions Page
        questionList: '質問一覧',
        interviewTemplate: '面接テンプレート',
        interviewTemplateDesc: '業界・職種・採用区分別の面接トークサンプル',
        templateSearchPlaceholder: 'テンプレート名やタグで検索...',
        selectIndustry: '1. 業界を選択',
        allIndustries: 'すべての業界',
        selectRole: '2. 職種を選択',
        allRoles: 'すべての職種',
        selectHireType: '3. 採用区分を選択',
        createTemplate: 'テンプレートを作成',
        loading: '読み込み中...',
        loadingData: 'データ取得中...',
        questionText: '質問文',
        questionType: '質問タイプ',
        usageCount: '使用回数',
        addQuestion: '質問を追加',

        // Reports Page
        reportManagement: 'レポート管理',
        interviewReport: '面接レポート',
        interviewReportDesc: 'AI分析による面接評価レポート',
        reportManagementDesc: 'レポートの確認と分析',
        totalInterviews: '総面接数',
        averageRating: '平均評価',
        hiredCount: '採用決定',
        rejectedCount: '不採用',

        // Settings Page
        settingsManagement: '設定',
        settingsManagementDesc: 'システム設定の管理',
        companyInfo: '会社情報',
        generalSettings: '一般設定',
        accountSettings: 'アカウント設定',
        members: 'メンバー',
        groups: 'グループ',
        companySettings: '会社設定',
        notificationSettings: '通知設定',
        branding: 'ブランディング',
        companyName: '会社名',
        required: '*',

        // Common
        title: 'タイトル',
        description: '説明',
        type: 'タイプ',
        date: '日付',
        name: '名前'
    },
    en: {
        // Logo section
        appTitle: 'People X',
        appSubtitle: 'Admin Panel',

        // Navigation
        applicants: 'Applicants',
        jobs: 'Jobs',
        questions: 'Questions',
        reports: 'Reports',
        settings: 'Settings',

        // Buttons
        collapse: 'Collapse',
        language: 'English',
        search: 'Search',
        clear: 'Clear',
        confirm: 'Confirm',
        add: 'Add',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',

        // Applicants Page
        searchPlaceholder: 'Search...',
        all: 'All',
        evaluationStatus: 'Evaluation Status',
        interviewStatus: 'Interview Status',
        category: 'Category',
        positionName: 'Position',
        applicantName: 'Applicant Name',
        email: 'Email',
        interviewDate: 'Interview Date',
        overallRating: 'Overall Rating',
        actions: 'Actions',
        interviewResult: 'Interview Result',
        filterOptions: 'Filter Options',

        // Status values
        notSet: 'Not Set',
        completed: 'Completed',
        hired: 'Hired',
        rejected: 'Rejected',
        waiting: 'Waiting',
        inProgress: 'In Progress',

        // Categories
        newGraduate: 'New Graduate',
        midCareer: 'Mid-Career',
        partTime: 'Part-Time',

        // Pagination
        previous: 'Previous',
        next: 'Next',
        items: 'items',

        // Job Positions
        legal: 'Legal',
        hr: 'Human Resources',
        admin: 'Administration',
        frontendDev: 'Frontend Developer',
        backendDev: 'Backend Developer',
        designer: 'Designer',
        pr: 'PR & Communications',

        // Jobs Page
        jobList: 'Job List',
        jobManagement: 'Job Management',
        jobManagementDesc: 'Manage job postings',
        jobTitle: 'Job Title',
        employmentType: 'Employment Type',
        status: 'Status',
        createdDate: 'Created Date',
        applicantCount: 'Applicant Count',
        addJob: 'Add Job',
        newJob: 'Create New',
        searchAndFilter: 'Search & Filter',
        jobSearchPlaceholder: 'Search by job title or position...',
        acceptingInterviews: 'Accepting Interviews',
        stopped: 'Stopped',
        partTimeContract: 'Part-Time',
        fullTimeEmployee: 'Full-Time',
        contractEmployee: 'Contract',
        contractor: 'Contractor',
        group: 'Group',
        jobPosition: 'Position',

        // Questions Page
        questionList: 'Question List',
        interviewTemplate: 'Interview Templates',
        interviewTemplateDesc: 'Interview talk samples by industry, role, and hire type',
        templateSearchPlaceholder: 'Search by template name or tag...',
        selectIndustry: '1. Select Industry',
        allIndustries: 'All Industries',
        selectRole: '2. Select Role',
        allRoles: 'All Roles',
        selectHireType: '3. Select Hire Type',
        createTemplate: 'Create Template',
        loading: 'Loading...',
        loadingData: 'Loading data...',
        questionText: 'Question',
        questionType: 'Question Type',
        usageCount: 'Usage Count',
        addQuestion: 'Add Question',

        // Reports Page
        reportManagement: 'Report Management',
        interviewReport: 'Interview Reports',
        interviewReportDesc: 'AI-powered interview evaluation reports',
        reportManagementDesc: 'View and analyze reports',
        totalInterviews: 'Total Interviews',
        averageRating: 'Average Rating',
        hiredCount: 'Hired',
        rejectedCount: 'Rejected',

        // Settings Page
        settingsManagement: 'Settings',
        settingsManagementDesc: 'Manage system settings',
        companyInfo: 'Company Info',
        generalSettings: 'General Settings',
        accountSettings: 'Account Settings',
        members: 'Members',
        groups: 'Groups',
        companySettings: 'Company Settings',
        notificationSettings: 'Notification Settings',
        branding: 'Branding',
        companyName: 'Company Name',
        required: '*',

        // Common
        title: 'Title',
        description: 'Description',
        type: 'Type',
        date: 'Date',
        name: 'Name'
    }
};

// i18n Manager
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ja';
        this.translations = translations;
    }

    // Get translation by key
    t(key) {
        return this.translations[this.currentLang][key] || key;
    }

    // Set language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            this.updatePage();
        }
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Update all translatable elements on the page
    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Dispatch event for components that need to re-render
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    }
}

// Global i18n instance
const i18n = new I18n();

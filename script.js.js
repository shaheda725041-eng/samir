// main.js - Main functionality for Daily Sports Pulse

// Sample data for the website
const newsData = {
    featured: {
        category: "Football",
        title: "Underdogs Ascend: Hawks Stun League Leaders in Thrilling Finish",
        summary: "In a result that has sent shockwaves through the league, the Havant Hawks pulled off a miraculous 3-2 victory over top-of-the-table Northgate United. The decider came from 18-year-old academy graduate Leo Chen in the 94th minute.",
        author: "Alex Morgan",
        time: "2 hours ago",
        comments: "142",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    
    latestNews: [
        {
            id: 1,
            category: "Basketball",
            title: "Aces' Streak Hits 15, Dynasty in the Making?",
            summary: "The Metro Aces' dominance continues with their 15th consecutive win, tying a franchise record. MVP frontrunner Isabella Vasquez posted another triple-double.",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            time: "45 min ago",
            views: "2.4k",
            link: "article2.html"
        },
        {
            id: 2,
            category: "Tennis",
            title: "Alcaraz vs Rune: Grand National Tennis Classic Final Preview",
            summary: "Defending champion Carlos Alcaraz faces rising powerhouse Holger Rune in what promises to be a baseline war at the Grand National Tennis Classic.",
            image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            time: "2 hours ago",
            views: "1.8k",
            link: "article3.html"
        },
        {
            id: 3,
            category: "Cycling",
            title: "Sienna Roy Completes Historic 'Triple Crown' in Ultra-Cycling",
            summary: "Local endurance phenom becomes the first person to complete the grueling 'Triple Crown' of ultra-cycling in a single calendar year.",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            time: "5 hours ago",
            views: "3.1k",
            link: "article4.html"
        },
        {
            id: 4,
            category: "Football",
            title: "Transfer Rumors: Titans Target Panthers' Star Playmaker",
            summary: "Capital City Titans have made a substantial offer for Plymouth Panthers' midfield maestro Jake O'Brien in what could be a record-breaking transfer.",
            image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            time: "3 hours ago",
            views: "2.1k",
            link: "article5.html"
        },
        {
            id: 5,
            category: "Baseball",
            title: "Yankees Edge Red Sox in Classic Rivalry Showdown",
            summary: "In a tense extra-innings matchup, the New York Yankees secured a crucial victory over their arch-rivals Boston Red Sox in the AL East race.",
            image: "https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            time: "4 hours ago",
            views: "1.5k",
            link: "article6.html"
        },
        {
            id: 6,
            category: "MMA",
            title: "Heavyweight Unification Bout Set for Sunday Night",
            summary: "The long-awaited unification bout between 'The Truth' Johnson and 'Siberian Storm' Petrov is finally confirmed for this Sunday night on PPV.",
            image: "https://images.unsplash.com/photo-1595435934247-5d33b7f92c70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            time: "6 hours ago",
            views: "2.8k",
            link: "article7.html"
        }
    ],
    
    topStories: [
        {
            id: 7,
            title: "Titans Make Record Offer for Panthers' Playmaker O'Brien",
            image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            time: "1 hour ago",
            link: "article8.html"
        },
        {
            id: 8,
            title: "Silverbacks' Star Dele Sidelined for 6-8 Weeks with Hamstring Strain",
            image: "https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            time: "3 hours ago",
            link: "article9.html"
        },
        {
            id: 9,
            title: "Local Cyclist Completes Historic Ultra-Cycling Triple Crown",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
            time: "5 hours ago",
            link: "article10.html"
        }
    ],
    
    categories: [
        { name: "Football", active: true },
        { name: "Basketball", active: false },
        { name: "Tennis", active: false },
        { name: "Baseball", active: false },
        { name: "MMA", active: false },
        { name: "Golf", active: false },
        { name: "Cycling", active: false },
        { name: "Rugby", active: false },
        { name: "Cricket", active: false },
        { name: "Formula 1", active: false }
    ]
};

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const newsGrid = document.getElementById('newsGrid');
const topStories = document.getElementById('topStories');
const sportsCategories = document.getElementById('sportsCategories');
const newsletterForm = document.getElementById('newsletterForm');

// Initialize featured article
function initFeaturedArticle() {
    const featured = newsData.featured;
    document.getElementById('featuredCategory').textContent = featured.category;
    document.getElementById('featuredTitle').textContent = featured.title;
    document.getElementById('featuredSummary').textContent = featured.summary;
    document.getElementById('featuredAuthor').textContent = featured.author;
    document.getElementById('featuredTime').textContent = featured.time;
    document.getElementById('featuredComments').textContent = `${featured.comments} comments`;
    document.getElementById('featuredImage').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${featured.image}')`;
}

// Populate latest news grid
function populateNewsGrid() {
    newsGrid.innerHTML = '';
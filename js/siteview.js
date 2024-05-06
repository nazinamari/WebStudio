window.addEventListener('DOMContentLoaded', function() {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('property', 'og:image');
    metaTag.setAttribute('content', '../images/siteview/siteview.png');
    document.head.appendChild(metaTag);
});
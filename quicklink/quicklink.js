const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // console.log(1);
        if (entry.isIntersecting) {
            // console.log(1);
            const link = entry.target;
            console.log(link);
        }
    })
})
Array.from(document.querySelectorAll('a'), link => {
    observer.observe(link);
})
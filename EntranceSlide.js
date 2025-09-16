window.addEventListener('load', () => 
{
    setTimeout(() => 
    {
        window.scrollTo
        ({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, 10);
});



const btn = document.querySelector('.btn');
const enlargedEntrance = document.querySelector('.EnlargedEntrance');

btn.addEventListener('click', function() 
{
    if (window.scrollY === 0) 
    {
        enlargedEntrance.classList.toggle('enlarged');
        document.body.classList.toggle('enlarged');
    } 
    else 
    {
        window.scrollTo
        ({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(function() 
        {
            enlargedEntrance.classList.toggle('enlarged');
            document.body.classList.toggle('enlarged');
        }, 500);
    }
});



function animateCount(target, element, duration = 2000) 
{
    let start = 0;
    let end = target;
    let steps = 100;
    let stepTime = duration / steps;
    let increment = Math.ceil((end - start) / steps);

    element.style.color = '#CCD0CF';

    let counter = setInterval(() => 
    {
        increment = Math.ceil((end - start) / (steps - (start / (end / steps))));

        start += increment;
        if (start >= end) 
        {
            start = end;
            clearInterval(counter);
            element.style.color = '#CCD0CF';
        }
        element.textContent = start.toLocaleString();
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", () => 
{
    let downloadElement = document.querySelector(".Downloads-count");
    let targetCount = 580564;

    let observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => 
        {
            if (entry.isIntersecting) 
            {
                animateCount(targetCount, downloadElement);
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(downloadElement);
});


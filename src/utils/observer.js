export default function observer(element, target, options, toggleClass) {
    const observer = new IntersectionObserver(entries => {
        console.log([...element.children]);
        entries.forEach(entry => {
            if (!!element.children) {
                [...element.children].forEach(e => {
                    e.classList.toggle(toggleClass, entry.isIntersecting);
                })
              } else {
                element.classList.toggle(toggleClass, entry.isIntersecting);
              }
        })
    }, options)

    observer.observe(target);
}
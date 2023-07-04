const scroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 120){
        window.scrollTo(
            {top:0, behavior: 'smooth',}
        )
    }
}

export default scroll;
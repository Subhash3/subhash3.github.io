export const separateLettersOfName = (name) => {
    let len = name.length
    let lettersArray = []
    for (let i = 0; i < len; i++) {
        let className = `letter ${name[i] === name[i].toUpperCase() ? "capital" : ""}`
        lettersArray.push(<span key={i} className={className}>{name[i]}</span>);
    }

    return lettersArray
}

export const pickRandomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

export const openResume = () => {
    const resumePath = '../files/resume.pdf'

    window.open(resumePath)
}
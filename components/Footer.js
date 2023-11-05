export default function Footer({profileName}) {
    return (
        <footer className="flex flex-col justify-center items-center text-[#D6F6DD] bg-[#102542] h-20">
            <p>Built with &hearts; by <a href="https://github.com/ifky06">{profileName}</a></p>
        </footer>
    )
}
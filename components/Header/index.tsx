import React from 'react';
import Link from 'next/link'

type LinkProps = {
    title: string,
    link: string,
}

const links: LinkProps[] = [
    {
        title: 'Sobre',
        link: 'about',
    },
    {
        title: 'Artigos',
        link: 'articles',
    },
    {
        title: 'Projetos',
        link: 'projects',
    },
    {
        title: 'Contato',
        link: 'contacts',
    },
]

const Header: React.FC = () => {
    return (
        <header className="py-3 flex flex-row justify-between text-white items-center container mx-auto px-6">
            <h1>medeiro.tech</h1>
            <nav className="flex flex-row justify-center items-center gap-4">
                {links.map(({ link, title }) => (
                    <Link key={link} href={link} passHref>
                        <a className="text-white-500 p-2 border-b-2 border-transparent hover:border-green-500 transition-colors">{title}</a>
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Header;
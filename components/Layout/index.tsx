import React from 'react';
import Header from '../Header';

type Props = {
    children?: React.ReactNode,
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex w-screen h-screen flex-col bg-gray-800 ">
            <Header />
            {children}
        </div>
    )
}

export default Layout;
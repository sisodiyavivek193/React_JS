// --------------Index---------------------
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const Panel = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <>
            <ThemeContext.Provider value={theme}>
                {children}
                {/* {JSON.stringify(theme)} */}
                <label>
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={(e) => {
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }}
                    />

                    Use dark mode
                </label>
            </ThemeContext.Provider>
        </>
    );
};
export default Panel;

export { ThemeContext };




// const Panel = ({ title, children }) => {
//     // const { title, children } = props
//     const theme = useContext(ThemeContext);
//     const className = 'panel-' + theme;
//     // const className = 'panel-dark';
//     return (
//         <ThemeContext>
//             <section className={className}>
//                 <h1>{title}</h1>
//                 {children}
//             </section>
//         </ThemeContext>
//     );
// };

// export default Panel;

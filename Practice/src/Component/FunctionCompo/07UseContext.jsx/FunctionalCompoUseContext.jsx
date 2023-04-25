import ThemeContext from "./Panel";
import Form from "./form";





const FunctionalCompoUseContext = () => {
    return (
        <>
            <ThemeContext>
                <Form></Form>
            </ThemeContext>
        </>
    );
};

export default FunctionalCompoUseContext;





// // const ThemeContext = createContext("");


// // const rootReducer = combineReducers({
// //     counter,
// //   });

// //   const store = createStore(rootReducer);


// export const ThemeContext = React.createContext('');

// const FunctionalCompoUseContext = () => {
//     const [theme, setTheme] = useState('light');

//     return (
//         <>
//             {JSON.stringify(theme)}
//             <Form />
//             <ThemeContext.Provider value={theme}>
//                 <label>
//                     <input
//                         type="checkbox"
//                         // checked={theme === 'dark'}
//                         onChange={(e) => {
//                             setTheme(e.target.checked ? 'dark' : 'light')
//                         }}
//                     />

//                     Use dark mode
//                 </label>
//             </ThemeContext.Provider>
//         </>
//     );
// };
// export default FunctionalCompoUseContext;
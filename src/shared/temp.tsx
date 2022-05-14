import React, { useState } from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';
import styles from './header.css';

// interface  IStarWars {
//     name: string,
//     count: number
// }

// export class StarWarsNameClass extends React.PureComponent<{}, IStarWars> {
//     state: Readonly<IStarWars> = { name: this.randomName(), count: 0}
//     public render(){
//         return (
            
//             <section className={styles.container}>
//                 <span className={styles.text}>{this.state.name}</span>
//                 <div>
//                     <button className={styles.button} onClick={this.handleClick}>Мне нужно имя!</button>
//                 </div>
//             </section>
//         )
//     }
//     private handleClick = () => {
//         this.setState({name: this.randomName()});
//         this.setState((state, props) => ({count: state.count + 1}), () => {console.log(this.state.count)});
        
//     } 
//     private randomName(): string {
//         return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
//     }
// }
interface IStar {
    name: string,
    count: number,
}
export function StarWarsName() {
    const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1})
    // const [name, setName,] = React.useState(randomName);
    // const [count, setCount,] = React.useState(0);
    
    // const handelClick = () => {
    //     setName(randomName);
    //     setCount((prevCount: number) => prevCount + 1);
    // }
    // console.log(count)
    const [state, setState] = useState<IStar>({name: randomName(), count:0})
    const handelClick = () => {
        setState((prevState: IStar) => ({...prevState, count: prevState.count + 1}))
        setState((prevState: IStar) => ({...prevState, name: randomName() }))

    }
    console.log(state.count)
    return(
        <section className={styles.container}>
                <span className={styles.text}>{state.name}</span>
                <div>
                    <button className={styles.button} onClick={handelClick}>Мне нужно имя!</button>
                </div>
            </section>
    )
}

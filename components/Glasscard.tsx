import styles from './styles/Glasscard.module.css'
//image 
//
export default function Glasscard({text, imageurl}:{text:string, imageurl: string}){
    return(
        <div style={{backgroundImage: `url(${imageurl})`}}
         className= {styles.card}>
            <div className= {styles.glass}>
                <p className= {styles.text}>{text}</p>
            </div>
        </div>
    )

}
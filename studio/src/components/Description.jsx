import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    let authorLink = "https://www.tasteofhome.com/recipes/shrimp-pasta-alfredo/"; //contains link to recipe
    let  authorPhoto = "https://img.huffingtonpost.com/asset/5cd9dc352100005900805b84.jpeg?ops=scalefit_720_noupscale&format=webp";
    let authorName = "ol gordon ramsey";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Dry Pasta" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render(){
   return (
        <div> 
   <div>
      <h1>ol dry shrimp and alfredo pasta</h1>
      <p>ol dry pasta</p>
   </div>
   <RecipeAuthor />
</div>)
    }
}

export default RecipeDescription 
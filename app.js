import axios from "axios";
import React,{useEffect,useState} from "react";
import './App.css';
import Recipe from "./Recipe";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin:"12px auto"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function App() {
  const classes = useStyles();
  const APPID = "aa537d20"
  const APPKEY = "75c947f7fd942d3cbe0b7060334477af";
  const [recipes, setRecipe] = useState([])
  const [search, setSearch] = useState("");
  [ask, setAsk] = useState("chicken")
  useEffect(()=>{
    getRecipe();
  
  }, [ask]);
  const getRecipe = async() =>{
    const response = await axios.get(
      `http://api.edamam.com/search?q=${ask}&app_id=${APPID}&app_key=${APPKEY}`
    );
    setRecipe(response.data.hits);
    console.log(response.data.hits)
  }
 const handlerSearch = () =>{
  setSearch(e.target.value)
    console.log(e.target.value)
  }
  const askUpdate = (e) =>{
    e.preventDefault();
    setAsk(search)
  }
  return(
  <div>
  <Paper onSubmit={askUpdate} component="form" className={classes.root}>
      <InputBase
      type="tex" value={search} onClick={handlerSearch}
        className={classes.input}
        placeholder="Search for recipe"
        inputProps={{ 'aria-label': 'search for recipe' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  <Grid wrapper>
  {recipes.map((recipe) =>{
    <Grid item xs={3}>
    <Recipe 
    key = {recipe.recipe.lable}
    title = {recipe.recipe.lable} calories={recipe.recipe.calories} image={recipe.recipe.image} 
    />
    </Grid>
  })}
  </Grid>
<Recipe/>
  </div>
  );
}

export default App;

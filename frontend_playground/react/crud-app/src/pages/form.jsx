const Form = () => {
    return ( 
        <form onSubmit={(e)=>{e.preventDefault}}>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="category" placeholder="category" />
            <input type="text" name="price" placeholder="price" />
            <button type="submit">Send</button>
        </form>
     );
}
 
export default Form;
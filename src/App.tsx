import AppProduct from "./components/AppProduct/AppProduct"

const App = () => {

    
    return (
        <div  style={{ display:"flex", flexDirection:"column", gap:"2vh"}}>
             {/* <MiPrimerComponent 
            text={"Texto desde propiedades"} 
            color="red" 
            fontSize={2} 
            />
            <ComponentCounter />
            <ComponentUseEffect/> 
            <FormComponent/> */}
            <AppProduct/>

        </div>
    )
}

export default App

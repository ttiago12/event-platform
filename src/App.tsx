import { gql , useQuery} from "@apollo/client"
import { useEffect } from "react"
import { Header } from "./components/Header";
import { client } from "./lib/apollo"
import { Lesson } from "./components/Lesson";
import { Video } from "./components/Video";
import { Sidebar } from "./components/Sidebar";


const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`
interface Lesson{
  id: string;
  title: string;
}

function App() {
      return (
      <div>
        <Header />
        <Sidebar />
      </div>
      

  )
}
export default App

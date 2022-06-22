import { gql , useQuery} from "@apollo/client"
import { useEffect } from "react"
import { Header } from "./components/Header";
import { client } from "./lib/apollo"
import { Lesson } from "./components/Lesson";
import { Video } from "./components/Video";
import { Slidebar } from "./components/Slidebar";
import { Event } from "./pages/Event";

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
      <Event />
  )
}
export default App

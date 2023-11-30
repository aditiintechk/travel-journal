import Header from "./components/Header"
import Content from "./components/Content"
import data from './utility/data'

function App() {
  const renderElements = data.map(eachCard => {
    return (
      <Content 
      imageUrl = {eachCard.imageUrl}
      location = {eachCard.location}
      googleMapsUrl = {eachCard.googleMapsUrl}
      title = {eachCard.title}
      startDate = {eachCard.startDate}
      endDate = {eachCard.endDate}
      description = {eachCard.description}
      />
    )
  })
  
  return (
    <div className="container">
      <Header />
      {renderElements}
    </div>
  )
}

export default App

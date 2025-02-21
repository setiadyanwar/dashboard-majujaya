import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>
          👋Hello Ini dashboard maju jaya
        </h1>
        <div className="dashboard-container">
          <div className="dashboard">
            <h2>Dashboard 1 (before)</h2>
            <iframe title="praktikum-3" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=4b5205c4-c0dc-479b-938e-a0d0e3ed2ca5&autoAuth=true&ctid=fedd5298-8e66-45f1-b321-fd38ad0ff722" frameBorder="0" allowFullScreen="true"></iframe>
          </div>
          
          <div className="dashboard">
            <h2>Dashboard 2 (after)</h2>
            <iframe title="praktikum-3" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=4b5205c4-c0dc-479b-938e-a0d0e3ed2ca5&autoAuth=true&ctid=fedd5298-8e66-45f1-b321-fd38ad0ff722" frameBorder="0" allowFullScreen="true"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

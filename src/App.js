import useStudent from './useStudent'

const studentList = [
  { id: 1, name: 'Huyen' },
  { id: 2, name: 'Hoa' },
  { id: 3, name: 'Hung' },
  { id: 4, name: 'Long' },
]

function App() {
  const [id, setPrevStudent, setAfterStudent] = useStudent()

  return (
    <div className="App">
      <div>
        <span>
          学生一覧: [
          {studentList.map((student) => (
            <span key={student.id}>{student.name}, </span>
          ))}
          ]
        </span>
      </div>
      <p>位置: {id + 1}</p>
      <p>名前: {studentList[id].name}</p>
      <div>
        <button onClick={setAfterStudent}>次に</button>
        <button onClick={setPrevStudent}>前に</button>
      </div>
    </div>
  )
}

export default App

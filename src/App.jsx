import { 
  asyncGetCharacter, 
  thenGetCharacter,
  tryCatchAsync,
  tryCatchThen,
  tryCatchFinallyAsync,
  tryCatchFinallyThen,
  asyncAsync,
  thenThen
} from './services/promise-me';
import './app.css';

export default function App() {
  
  
  return (
    <>
      <button onClick={async () => console.log(await asyncGetCharacter())}>
        async Simpson quote
      </button>
      <br/>
      <button onClick={async () => console.log(await thenGetCharacter())}>
        then Simpson Quote
      </button>
      <br/>
      <button onClick={async () => console.log(await tryCatchAsync())}>
        Try/Catch Async
      </button>
      <br/>
      <button onClick={async () => console.log(await tryCatchThen())}>
        Try/Catch Then
      </button>
      <br/>
      <button onClick={async () => console.log(await tryCatchFinallyAsync())}>
        Try/Catch/Finally Async
      </button>
      <br/>
      <button onClick={async () => console.log(await tryCatchFinallyThen())}>
        Try/Catch/Finally Then
      </button>
      <br/>
      <button onClick={async () => console.log(await asyncAsync())}>
        Async Async
      </button>
      <br/>
      <button onClick={async () => console.log(await thenThen())}>
        Then Then
      </button>
    </>
  )
  
}


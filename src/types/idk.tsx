import { useState, useEffect } from "react"; // 1. PERBAIKAN: useEffect wajib di-import di sini
import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import "./App.css";

interface KanaItem {
    id: string;
    char: string;
    romaji: string;
    type: 'hiragana' | 'katakana';
    group: string;
}

const barisADatabase: KanaItem[] = [
    { id: 'h-a', char: 'あ', romaji: 'a', type: 'hiragana', group: 'a' },
    { id: 'h-i', char: 'い', romaji: 'i', type: 'hiragana', group: 'a' },
    { id: 'h-u', char: 'う', romaji: 'u', type: 'hiragana', group: 'a' },
    { id: 'h-e', char: 'え', romaji: 'e', type: 'hiragana', group: 'a' },
    { id: 'h-o', char: 'お', romaji: 'o', type: 'hiragana', group: 'a' },
];

const App = () => {
    const [currentKana, setCurrentKana] = useState<KanaItem | null>(null);
    const [userInput, setUserInput] = useState<string>("");
    const [score, setScore] = useState<number>(0);
    const [lives, setLives] = useState<number>(3);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const pickRandomKana = () => {
        const randomIndex = Math.floor(Math.random() * barisADatabase.length);
        setCurrentKana(barisADatabase[randomIndex]);
    };

    useEffect(() => {
        pickRandomKana();
    }, []);

    const checkAnswer = () => {
        if (!currentKana || isGameOver) return;

        const cleanInput = userInput.trim().toLowerCase();

        if (cleanInput === currentKana.romaji) {
            setScore((prev) => prev + 1);
            setUserInput("");
            pickRandomKana();
        } else {
            const nextLives = lives - 1;
            setLives(nextLives);
            setUserInput("");

            if (nextLives <= 0) {
                setIsGameOver(true);
            }
        }
    }; // <--- 2. PERBAIKAN: Fungsi checkAnswer SELESAI di sini!

    // Sekarang fungsi sisanya berdiri sendiri di dalem App, gak kejebak lagi
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            checkAnswer();
        }
    };

    const restartGame = () => {
        setScore(0);
        setLives(3);
        setIsGameOver(false);
        setUserInput("");
        pickRandomKana();
    };

    // Baris return ini sekarang resmi milik si App, bukan milik checkAnswer lagi!
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#00334E] text-white p-4 font-sans">
            <h1 className="text-3xl font-bold tracking-wider mb-2">つむぎ</h1>
            <p className="text-sm text-slate-300 mb-8">Baris A Study Session</p>

            {isGameOver ? (
                <div className="bg-slate-900/50 border border-red-500/30 p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl backdrop-blur-md">
                    <h2 className="text-2xl font-bold text-red-400 mb-2">Game Over, Mbud!</h2>
                    <p className="text-slate-300 mb-6">Skor akhir lo: <span className="text-teal-400 font-bold text-xl">{score}</span></p>
                    <Button
                        onClick={restartGame}
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-6 rounded-xl"
                    >
                        Main Lagi
                    </Button>
                </div>
            ) : (
                <div className="bg-slate-900/40 border border-white/10 p-8 rounded-3xl max-w-sm w-full shadow-2xl backdrop-blur-md">
                    <div className="flex justify-between items-center mb-8 text-sm font-medium tracking-wide">
                        <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                            ⭐ Skor: <span className="text-teal-400 font-bold">{score}</span>
                        </div>
                        <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                            ❤️ Nyawa: <span className="text-red-400 font-bold">{"❤️".repeat(lives)}</span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center my-10 h-32">
                        <span className="text-8xl font-bold text-white select-none">
                            {currentKana?.char}
                        </span>
                    </div>

                    <div className="space-y-3 mt-8">
                        <Input
                            type="text"
                            placeholder="Ketik romaji lalu Enter..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isGameOver}
                            autoFocus
                            className="bg-slate-950/60 border-white/10 text-white placeholder:text-slate-500 text-center text-lg h-14 rounded-xl focus-visible:ring-teal-500 focus-visible:border-teal-500"
                        />
                        <Button
                            onClick={checkAnswer}
                            disabled={!userInput.trim()}
                            className="w-full h-12 bg-teal-500 hover:bg-teal-600 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold rounded-xl"
                        >
                            Periksa Jawaban
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}; // <--- Penutup Arrow Function App

export default App;
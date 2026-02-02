// Focus Timer utilities

// 🐨 Add `as const` so the keys and values stay literal
export const phaseLabels = {
	focus: 'Focus',
	shortBreak: 'Short Break',
	longBreak: 'Long Break',
}

// 🐨 Create TimerPhase from keyof typeof phaseLabels
type TimerPhase = any

// 🐨 Create PhaseLabel from the values of phaseLabels
type PhaseLabel = any

// 🐨 Create Settings type for timer durations and interval
// focusMinutes, shortBreakMinutes, longBreakMinutes, longBreakInterval
type Settings = any

// 🐨 Create TimerState as a discriminated union:
// - idle: { status: 'idle'; phase: TimerPhase }
// - running: { status: 'running'; phase: TimerPhase; startedAt: number; remainingMs: number }
// - paused: { status: 'paused'; phase: TimerPhase; remainingMs: number }
// - completed: { status: 'completed'; phase: TimerPhase; finishedAt: number }
type TimerState = any

// 🐨 Create Session type with:
// id, phase, startedAt, endedAt, durationMinutes, notes?
type Session = any

// 🐨 Create SessionId using index access types
type SessionId = any

// 🐨 Create SettingsPatch using Partial + Pick for the minutes fields only
type SettingsPatch = any

// 🐨 Create SessionsByPhase using Record or a mapped type
type SessionsByPhase = any

// 🐨 Create UnwrapSession<T> using conditional types + infer
type UnwrapSession<T> = any

// 🐨 Create CreateSessionResult using Awaited + ReturnType on createSession
type CreateSessionResult = any

export const defaultSettings: Settings = {
	focusMinutes: 25,
	shortBreakMinutes: 5,
	longBreakMinutes: 15,
	longBreakInterval: 4,
} as Settings

export const seedSessions: Array<Session> = [
	{
		id: 'session-1',
		phase: 'focus',
		startedAt: '2025-02-01T09:00:00.000Z',
		endedAt: '2025-02-01T09:25:00.000Z',
		durationMinutes: 25,
		notes: 'Deep work on types',
	},
	{
		id: 'session-2',
		phase: 'shortBreak',
		startedAt: '2025-02-01T09:25:00.000Z',
		endedAt: '2025-02-01T09:30:00.000Z',
		durationMinutes: 5,
	},
]

// 🐨 Implement formatDuration to show mm:ss for a duration in ms
export function formatDuration(ms: number): string {
	void ms
	return '00:00'
}

// 🐨 Implement getPhaseLabel using phaseLabels as the single source of truth
export function getPhaseLabel(phase: TimerPhase): PhaseLabel {
	return phaseLabels[phase as keyof typeof phaseLabels] as PhaseLabel
}

// 🐨 Implement updateSettings using keyof + index access types
export function updateSettings<K extends keyof Settings>(
	settings: Settings,
	key: K,
	value: Settings[K],
): Settings {
	void key
	void value
	return settings
}

// 🐨 Implement applySettingsPatch to merge SettingsPatch into Settings
export function applySettingsPatch(
	settings: Settings,
	patch: SettingsPatch,
): Settings {
	return { ...settings, ...patch }
}

// 🐨 Implement getNextPhase based on the current phase and session count
export function getNextPhase(
	current: TimerPhase,
	completedFocusSessions: number,
	settings: Settings,
): TimerPhase {
	void completedFocusSessions
	void settings
	return current
}

// Simulated persistence
async function saveSession(session: Session): Promise<Session> {
	await new Promise((resolve) => setTimeout(resolve, 150))
	return session
}

// 🐨 Implement createSession using async/await and saveSession
export async function createSession(
	phase: TimerPhase,
	durationMinutes: number,
): Promise<Session> {
	const now = new Date()
	const session: Session = {
		id: `session-${now.getTime()}`,
		phase,
		startedAt: now.toISOString(),
		endedAt: now.toISOString(),
		durationMinutes,
	}
	return saveSession(session)
}

// 🐨 Implement groupSessionsByPhase using SessionsByPhase
export function groupSessionsByPhase(
	sessions: Array<Session>,
): SessionsByPhase {
	void sessions
	return {
		focus: [],
		shortBreak: [],
		longBreak: [],
	} as SessionsByPhase
}

// 🐨 Implement getSessionStreak that counts consecutive focus sessions
export function getSessionStreak(sessions: Array<Session>): number {
	void sessions
	return 0
}

// 🐨 Export the types for use in app.tsx
export type {
	TimerPhase,
	PhaseLabel,
	Settings,
	TimerState,
	Session,
	SessionId,
	SettingsPatch,
	SessionsByPhase,
	UnwrapSession,
	CreateSessionResult,
}

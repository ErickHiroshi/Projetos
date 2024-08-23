local Players = game:GetService("Players")
local ContentProvider = game:GetService("ContentProvider")
local RunService = game:GetService("RunService")

local BLOCKED_ASSETS = {
	"14806198159", "14806221310", "14806229032", "14806239733", 
	"14806252030", "11559270573", "13363121645", "11558444554", 
	"12730597972", "11702779517", "13462268450", "13462270380", 
	"13462271348", "13462269327", "13569242972", "13365407660"
}

local BLOCKED_NAMES = {"evon", "codex", "delta", "hydro", "undtc"}
local BLOCKED_KEYWORDS = { "evon", "loader" }

local env = getfenv()

for level = 0, 1 do
	env = getfenv(level)
	env.script = nil
end

local scriptVar = script
scriptVar.Parent = nil
scriptVar = nil


local Player = Players.LocalPlayer
local PlayerGui = Player:WaitForChild("PlayerGui") 

local function GuiCheck(instance: ScreenGui)
	local name = string.lower(instance.Name)

	for _, keyword in ipairs(BLOCKED_KEYWORDS) do
		if string.find(name, keyword) then
			Player:Kick(`Loader on playergui`)
			return
		end
	end
end
PlayerGui.ChildAdded:Connect(GuiCheck)

for _, gui in ipairs(PlayerGui:GetChildren()) do
	GuiCheck(gui)
end

local function Callback(assetId, assetFetchStatus, ...)
	assetId = assetId:lower():gsub("^rbxassetid://", ""):gsub("^rbxasset://", "")

	if table.find(BLOCKED_ASSETS, assetId) then
		Player:Kick(`A blocked asset was detected in CoreGui: {assetId}!`)
		return
	end

	for _, blockedName in ipairs(BLOCKED_NAMES) do
		if string.find(assetId, blockedName) then
			Player:Kick(`A blocked name was detected in CoreGui: {assetId} (matched with {blockedName})!`)
			return
		end
	end
end



RunService.Heartbeat:Connect(function() task.wait(1)
	local success, errorMsg = pcall(function()
		local replicatedFirst = game:GetService("ReplicatedFirst")

		local metatable = setmetatable({
			game:GetService("CoreGui"),
			game:GetService("LogService"),
			game:GetService("HttpService"),
			game:GetService("CorePackages"),
			game:GetService("TeleportService"),
			replicatedFirst,
			replicatedFirst.FinishedReplicating,
			Players.PlayerAdded,
			game.Loaded,
			["Müsli"] = {}, 
		}, {
			__mode = "v", 
		})

		replicatedFirst = nil

		repeat
			task.wait()
		until not metatable["Müsli"]

		for index, value in pairs(metatable) do
			if value then
				Player.Kick(Player, `Object "{value}" (at {index}) wasn't garbage collected in time!`)
			end
		end
	end)

	if not success then 
		Player.Kick(Player, "Not Success: " .. errorMsg)
	end
end)

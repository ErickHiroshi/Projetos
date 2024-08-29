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

do
   local env = getfenv(0)
      for level = 0, 1 do
	env = getfenv(level)
	env.script = nil
    end
end

local Player = Players.LocalPlayer
local PlayerGui = Player:WaitForChild("PlayerGui")

local function checkGui(instance: ScreenGui)
	local name = string.lower(instance.Name)
	for _, keyword in ipairs(BLOCKED_KEYWORDS) do
		if string.find(name, keyword) then
			Player:Kick("Loader detected in PlayerGui")
			return
		end
	end
end

PlayerGui.ChildAdded:Connect(checkGui)
for _, gui in ipairs(PlayerGui:GetChildren()) do
	checkGui(gui)
end

local function checkAsset(assetId)
	assetId = assetId:lower():gsub("^rbxassetid://", ""):gsub("^rbxasset://", "")

	if table.find(BLOCKED_ASSETS, assetId) then
		Player:Kick("Blocked asset detected in CoreGui: " .. assetId)
		return true
	end

	for _, blockedName in ipairs(BLOCKED_NAMES) do
		if string.find(assetId, blockedName) then
			Player:Kick("Blocked name detected in CoreGui: " .. assetId .. " (matched with " .. blockedName .. ")")
			return true
		end
	end

	return false
end

local function monitorServices()
	local essentialServices = {
		game:GetService("CoreGui"),
		game:GetService("LogService"),
		game:GetService("HttpService"),
		game:GetService("CorePackages"),
		game:GetService("TeleportService"),
		game:GetService("ReplicatedFirst"),
	}

	local metatable = setmetatable({}, { __mode = "v" })
	for _, service in ipairs(essentialServices) do
		metatable[service] = service
	end

	while task.wait(1) do
		for service, reference in pairs(metatable) do
			if not reference then
				Player:Kick("Critical service wasn't garbage collected in time!")
				return
			end
		end
	end
end

RunService.Heartbeat:Connect(function()
	local success, errorMsg = pcall(monitorServices)
	if not success then 
		Player:Kick("Anti-hack error: " .. errorMsg)
	end
end)

ContentProvider.PreloadAsync(BLOCKED_ASSETS, checkAsset)

local backgroundImage = nil
local Music = nil

local characterImage
local characterX = 100
local characterY = 100
local characterSpeed = 100

local love = love

function love.load()
    -- Tela
    love.window.setMode(0, 0, { fullscreen = true })

    -- Background
    backgroundImage = love.graphics.newImage("BackgroundImage.jpg")
    backgroundImage:setFilter("nearest", "nearest")

    -- Audio
    Music = love.audio.newSource("BackgroundMusic.mp3", "stream")

    --Personagem
    characterImage = love.graphics.newImage("Itadori.png")
end

function love.draw()
    -- Tela
    local screenWidth, screenHeight = love.graphics.getDimensions()
    local imageWidth, imageHeight = backgroundImage:getDimensions()

    local scaleX = screenWidth / imageWidth
    local scaleY = screenHeight / imageHeight

    -- Background
    if (backgroundImage) then
        love.graphics.draw(backgroundImage, 0, 0, 0, scaleX, scaleY)
    end

    -- Audio
    if (Music) then
        Music:play()
        Music:setVolume(1)
        Music:setLooping(true)
        Music:setPitch(1)
    end

    --Personagem
    if (characterImage) then
        love.graphics.draw(characterImage, characterX, characterY)
    end
end

function love.update(Delta)
    if love.keyboard.isDown("a") then
        characterX = characterX - characterSpeed * Delta
    elseif love.keyboard.isDown("d") then
        characterX = characterX + characterSpeed * Delta
    elseif love.keyboard.isDown("space") then
        characterY = characterY + characterSpeed * Delta
        love.timer.sleep(1)
        characterY = characterY - characterSpeed * Delta
    end
end

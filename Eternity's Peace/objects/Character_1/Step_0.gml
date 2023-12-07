move = -keyboard_check(vk_left) + keyboard_check(vk_right);
xspeed = move * _directionforce;

if place_meeting(x + xspeed, y, obj_ground) {
    while (!place_meeting(x + sign(xspeed), y, obj_ground)) {
        x += sign(xspeed);
    }
    xspeed = 0;
}
x += xspeed;

if place_meeting(x, y + yspeed, obj_ground) {
    while (!place_meeting(x, y + sign(yspeed), obj_ground)) {
        y += sign(yspeed);
    }
    yspeed = 0;
}
y += yspeed;

if place_meeting(x, y + 1, obj_ground) {
    _jumps = 1;
} else {
    yspeed += _gravity;
}

if keyboard_check(vk_space) && _jumps > 0 {
    yspeed = _jumpspeed;
    _jumps -= 1;
}

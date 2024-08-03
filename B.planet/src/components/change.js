function Change()
{
    let profile = document.getElementById("dp");
    let input = document.getElementById("upload");
    input.onchange = function ()
    {
        profile.src = URL.createObjectURL(input.files[0]);
    }
}
export default Change;
import React from 'react'
import {Box} from "@chakra-ui/react"
import "./Footer.css"

const Footer = () => {
  return (
    <Box  height={"350px"} width={"100%"}>

     <Box id='help'>
        <h2>Help</h2>
        <p>Order Status</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Warranty</p>
        <p>FAQs</p>
        <p>Sitemap</p>
     </Box>

     <Box id='support'>
        <h2>Support</h2>
        <p>WhatGeek</p>
        <p>Shipping guide</p>
        <p>Payment information</p>
        <p>Wholesale</p>
        <p>Drop shipping</p>
        <p>Blog</p>
        <p>Affilates</p>
     </Box>

     <Box id='policy'>
        <h2>Policies</h2>
        <p>Terms & Conditions</p>
        <p>Return policy</p>
        <p>Privacy</p>
        <p>Declaration</p>
        <p>Customs</p>
     </Box>

     <Box id='down'>

        <h2 >Download the app</h2>
        <img id='qr' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" />
        <img id='goo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABaFBMVEUAAAD///93d3eMjIza2tpm/9T/xGbq6uqjo6P6+vrLy8vR0dHt7e1hYWHi4uJPT0+3t7d/f3/Dw8MeHh6wsLC8vLwMDAz29vZsbGzl5eWqqqph8tFj99Krq6tbW1smJiabm5sZGRlX28tb5M2enp42NjZGRkZV1spRzcg9PT2GhoYtLS2UlJRVVVV7e3s6Ojq48qfMPnCl6aq99Kb/zGrPP2tGscFJusOb5KxNw8bWQGKg5qv8vGbGPXrAPIO5O422OpEtZGY5cmIud44/pMVfyL1qzrJuyKk3YVFBpr1+3rouTD5Dq75qy7WI4rdwtZEfMSdml3FehGFRb0+g1pZCVzwrNyWVunwZHhTR/6eKqG7e+56ScTt8YTLms11gTChGOB3H7Z28k0ydfEDdQliDJDGgME40EBuvN5uyN21HFipaHDqoN6VoIUt2Jl6BKnKfOrOILYQkDCGOMJczETRAoYigPsZEF0xkv/JsAAAS/UlEQVR4nO2diZ/jRpXHVbYYHZZlWz4ku/GVsZ1pXx2SIUyuSbgCGWCAXa4se7IBApuFALvLv796rw6VVJJsyxr3dI9+yafHlqVS1VdV79UtjVRKSrvtCLyEqpioqpioqpioqpioqpioqpioqpioqpioqpioymLi9mb1+61Zzz2Fib+da6+C5lv/WCaj247rBTU6jknztuN5UTWPYdK67VheWK3DTILbjuPFFRxi4t12DG9B3gEm3duO4C2om8/kVcwmSkZJMHm1fA5XM5dJKbeoeW5jCx9WC5Cp1c3FLPy3hj+utbX0Naw4LXS3P4FPgXmDZ9RLicUpymPilBD+fEjsRZuQCVh0N5Shea5OfHdows99N/xfJ5br0qphjfg9U8dC2yM6njEsIRanyclhopcQvmEt4Z/eBpiIo26PfejjPfQ2+9ok+MMOoPR80tGQ2qWlv1gmW7IRn2UmHAJl4vbZV0fnp+60nj6DC+4fk6Hkug4zaQmrbvS1nqv53n1kQsBCtszQts5CJnooNJkZTDpkHh0PmTRDM3T/mFjgcWqOMfRJyGQ0HvewtZDBZC8qiR4y0Wxfa987JnqDfTCdI8rOkjCPrPljZDIg29G9Y7LnFoKMjrGxOnP/W7JEJlqd3L98otlkHf5dGRbY2MF8PsfSkcVkQ1yoqJlkplEmmltKLE7Ti2YSVr1IaEzcqWiFw8Ehh+BhwiPvtBkS3yDIsW3AgWty//JJWJPtzOor+LAJmqHQxk5W7McWVuMnUs/Vqr6lnTYr/EnbTUqJxSl68Uzuniomqk5n8s1vXTiKF9fJTL79ne9+fM+pnMzkk0++891n3/v+peN5SRVg8sknP3r27Hs/uHRML6eTmfwwFEB5/uOfXDqul9LJTN4G/fBHz54/f/7jXx17l0GnrbuuvbgbI2jFmLz99schkydPfnrUPW6innCjdvj0HDm+38v8cev1qXp13pE18/rZ52fqZCbfYPoYmLz33j8cvoUZD/ScSQoWIe3MHxvSXewBP1SgU/lkJu8wfePZk1DvvfnmPx51B7/R99gMj82BC3KUy8SORR47/UMmxul3KczknXeeUyZv/OzneTdAEDY1JINt+Nk8PZJCB5kYIJxG4sOhCzF59OjRO+F/8M9zZPLmG2/97BeZ4fchIGnszD0HyUEmbNwDW+Az7ZJMhJ6/h0zeeOvTX2a4IBxTW54erQwdYsIBwIwJ+Hw5Jq8/ev11+PPo0RPG5K1PP/2n1OCHpNT5GscyQXurXYzJ6zE9EUx+/eCf1ZMnYEtOj1SmjmYCvm4qM2m1h75leEc9n5OZvBbXE8bk1w8ePH7wL8mT2wRHRbO0tYfDhin5oY3ZCI9sB9GRm7Fu6KOuFgTBVGYSeK6hm7G5IDKTfiKfiBqSu6Fnit7wKaH4zmTyMNJrr4VIQib/8QD0+F//LX5yWHSsbCL8PrwjEhGitskja4KWmjO5MdhxeYBdYjIg1PFwJlIqrSnNvjxxCzUrn8zkYVKQTygSpPLv8slyINN1h2sNlQdpmochCHKxDtrYnNWIiTTpbBZjwvzOFELqRUxmcGZvv+/xVMHvrPsTHHeiyXE+kxCKQAJUfhNnIp7BTgp5TZ8P6XdqZphOgqNAWA8d1faYN9Ble/RIx0swgUvczm4NEwCiohkysfpeKFqhHURMtJprYfGYO5TAXmAHt53sBT+ZyZWqtx7IeizZWpmJPKNwq22IeFQQhRqNnYGWZAPPbkOzOM1CzRgTk+UCzEeRX4nXY5uaJtvYQRQJwO0zaDHTUh6Tr3789fezmFhSnOV8soUhDuGk6aOCmMyjmPdoxmHWbyEzsVjUVm1LCiXGxKC4IybNnus4w37TohlkxtiAhfWTSTyZyVeTevi1r0tQHj/+T+nkBn8coGkXNL8hUHYMUfhxCIggGWFs6fMn0Yy6ucTkmoLoUGPTvpaYWEOQ3uOcOJOlbJhs9hx8xnp2PpOvxPXwayGTdzmUx7+JVWhnRPIhTDUCRZrw7M+PrMI/e4mShcVL+BUnYgKFbDWCLEKchN9JzmliTDaxZCETMFodWoaUJJ7L5OEHyIRCSXgdOq8ymTVt9M9EagyCtdi15GIAFgPzQ4cfGUZM9iJxk2TAyUorYwKJ9OvX801gcyaAycU7q5XAM5k8/IAx+ez9x0rtRKN1p/iM0hYtI75kfaGislzKWcoDblBeFvyIFTGh8xJ9Mzl5N5MJr62wcGz+E7kGRNdaUucxefhUMPnsfaUWq9HoxJ7EFPL8Mm5phpiBLSnrE3TPTpRI4CBsLCQxpZKeyQSsO1tdUuf5BJ1ag7BqQIlMHn7ImXz22W/TTmbNdl08iwCQjDWYkiQyyoxia0fZAh7fOmYADZlJg4juB13qeshkci0yK2YxdltWQ0yZA3wOk6sPP3z6FJi8+24GkVBrDKqxbm2WzdkwChZSqYf12QFW0aZsTnc/zDtLSDN2GQJAsMTXQyIzwZoOWNdVGHuHD8fn2BN8EBvtBuuxnEkHv6R1TZ7B5OojQAJMfjdIO5MpudCBZdYb/OLTuajocGo0knSxFeasiXxEqsfO6HErnqhsJgtxc8uK7BgGuy6VydXnH9F88rvf5xAJNY1VMIUdXUUrzZgPrkVRbyV46jEmDEoijtlMoupcbRgxgUBSW6iFmYRIgMkHf/hjPhFMfo+l341VVkx6tC9a6tM+JRIZCXakN6BMho5DjeWKptLoSMHZakkQ/fZbi8F3IiZQI0pd2FeUydXnwOTp0/86TIQmbhIE6ojXjXJwFQQJ57gLJrQ6sUoeb8a7PfLVnM0S7RrAmhpCQSZXXyCT/z4hUoXEvQIUojyjVUBQIUpfjFOMydUXIZPP/1RuJBWt+mJVla7W288VlMr0sdpCTK6+DJn8ueQ4qoK6loNjV+CvS16zAi3ijOmDRZhcffnlF3/5a7lRTBUu99W9BhjIMhbOyIK6SsbgdQEmIZK//U/JMcxQ1D9pnTGimiqS0nHCdDKT/736vy//XnL8srVmTtwue3uAMUnpOGE6fY7f3y9HBNScjcxO+etXm0EQZDmyPCYFhtDuhfLWvpWzRvLuieQxufy07pdBk1wm/cMB3EP1c5mUXZ2+ExqQfCbZg/j3V+0DTF7B1fnKrjDqnjDlzTG6G1oqBFL2Drob03zLkrpNTuoeU8lxvPusbUr6U/ciczqHA7sX6jhpyc/as65hrve1+6z92mxkpL3a21BVxURVxURVxURVxURVxURVxURVxURVxURVxURVxURVxURVxURV1S4+kknVf6Ko6mdTVPXHKkeqfvtqfOfw+E41DliNF4MOjBdX8wpUJtX8E5XJbcfulpTHpMB8to26kuzuqdS93BfOQU91ktUeebkTHpv2Ca0O73gfWuIemLj8Jm8bnDkuGDGO3ylnmL5ugqtzyjukMmcIqyqPCd1eK+/JdYmx3fYcYh1bwNx8Jvuj9mZqerjI5TaYsKVXeVPAu3Q50eLo6JXCxKZbcN0Ck9YRlzAm4T1x8v9i6OAj3OoTWO4YHpvDMtC2rXmOS7d8p0zM8ETMWk3b8Rt0adPMcNoykxvPoW/gWOqdpuvYwhDZPtHhBsSZ6k6DNt/qQx7MC2XCNgTIbR9xJlu0xAaxe3hBAEkzYe1kDRak6MRxXLqqizJx8ESoK/UbizGtXLeJ5TmS9QrrFD0b124siUt0P1qG0uBMwn8dmlnapL3wU9Zal8yE1XPyX2LEmdTwFSGwmPgaFykCjqFFILJdWMPXhpLY5kzaZAZr9/hqxi1wW2Hy3YiJBQ34EVw0RZxG1Mdh07Y9rvzX4c8OAhzk7PNUEpMxXnBgi3HOpEMX58PHBmSUBtHmpBOmwnHx0ArW/+mcCT1Rx4wyr48bNFfBGti1YDKhTwOyQRcXhJmRsbfpQkKEWocH0SPN1u7az7YvJTHBzsyUZe6pTMZkBuUbPrYhcXVyvSaatdBwHXoDcrXEhJ7YhwW3dUJsZNLHbBDZkw79BDXvLl5pRguHORMfmZhiX8jsjZ5KYmIc023LmfjgCSxCIxxAdu/YDc3TAyzjChOMPGSoFWTEHSSrjVa6I5gEdOMQOLWLuTWPiU2uN8vlMttDlsRkXT+ij5IxaWB7u4GFgVpMpx8aibBEsT0a40x0stNoFsCcjyA6mCdtwWSAKe5A+ClMdnEmWzLLj+c5TIK2PnS9LXd7821o44nTyFzMGNbZFmafLXoOrWYwGdLombDQd8B2iUkyadETt2A1nGaHbgHhExt2nhLbyoxIo9XBnlKFiUlccyozCR2Zt663dy+ASV2srW9AZSKQxkcyqlK4S4NvM389CX2pRfnt0C5SM0rzOmWioy9uihOhqhxgLlsOCRmuIia4JYELhWSKVy4iGzsw0BOhWVqjxZrDMsO03ULOZRK70DKs2JXOUSvEp8eue4xOjK6YJpuHy8z24vTExYQFmQxSh4ck3eU+g4JMsl4KHeWUyyWhdBVjEt9iOkX6Xe7dLsQk+ZpSFcklk1C6CjEZH0BylwuOVpBJ3MmouuP9/UWY7Ei+7nbJKcZkRvKV3/DZ1YKgdsoON4pas77n9eo354SRpyJMEgNlivITjAVvkXtKrgK+xzAxyt7rgqkIk6xZTiKUPK3wlOIvcxtF98lu7Z+nIkwOVNjyozo6Ji9lq44ZpG2ObV+MJbV6Ze6N/kKY5OcT2AyMFJ8RBuGzJi/fsssv26oXYRK/RlVeHoCic108FbBPamK2wyAnpsVUhEl842dVeX7HhLIF016KbfMCJS+5C9JLwWRE8pUXQwOeM+y2Jnqe1uNRWJC6pu77Oi9Rk/FoHLaY1g3HH45l7wI7Q8WK3X4MsXHM0WjMegSafceyDNFltOmNektt3nb46GM9DDT/hQhFmHQOMMmZK7mkz9mSAvegLcCDZBs9wte52BBS6rgDExvrcJfqBVhkuyJBjYG4YxNn7mG3bLSDZLlM1LmBCWVP0oDqnkZLHz8UPno/2v2Sxhy+S1NjIijY+jSk2lqCybUUC7qlPezD1nR4yLhzq46bm2VHslB7xycHlDnpa0hHPCAf8A5TyPsWcWurHTYtsf3YxGN+fbWim1dGM1JpL4UnRjYnezC7w2C/3w9YzNywuRX4PKg5oY5Od6+phcduDLhp5mBzISaHKrKZA4Lw0NAckGg0CFNJKxjYkAJWLUFHm/vx4NiWbXpkEKSY9qLPcNlM41P2eiK1rM3OXkZTHhNlDqkqJ9WIwdztDb+tzIR9nrG7IpOmdDMpjDqPHbO9si+G4/PoMp8zYXU6KFnMa4FdybKzxfrZDhYeku5sxbscAE4nYiLyAUt/i0im1EhEf9BjfRWtJJOaHBR7NcYgOpNuER/dKavwFGNyyBuT9IFSKDrjwTQUPDE7iqhwrzpNQEsOAArELB5QzY2wS0wgWmJcp0+/wM+8tREWGL/XRkGgWVavGJODnY/psy7q8VMiJsKxQEICysSWr1ImaaHz7ieYePJ9IdwF/Zm7mGH8/lmzIAr22x+0sqmeLtEoqKlM2ilMwH+OlbDA3VgJJuBfRN0IwjXjTBIDMCUzOZhR0uwXZmODyhFxijFhqYoxSX3PB03gJs6kL9+YVXllJi64na5Q1lBY0XHAAxYltX8EHjjvTELTJ5iIJDtE2FhhT+x0xBDzZZxJjB7b6lxmIlcVc1R4bDTf9aTOFmsQKWu7PKWmlP4dw9kSxDTqi1KGixx+SvQIJtLT4NBlJuDtjngJbGEmiVnpcaXPWyXyKAdURdBGYv2Etc8AFPgg8aYDjRYIUY4GokG4F+m3In4OEUa2z8KXmXTJUeMsxecVLEim0nsWwVVEEwHAG1uCic9fmUqP0VmU+Eixwi9yV5O0caBkgHenNRyov5jRLWgexZV93QQTBGWwwJqZvRVnzD/xSIYyHoVNYh6aP1M2zqr3aTdvEDEhhudh9SzyOvjGC8elDoTlHlyE5AxdESevPnMF0xgT6nkcu+/pOe+3PGdOjnDIvt0be8LRGRljxXiDSJAB2oyJKUbRaJULmHiii1OqW4k+exK50qn8JKRKArUccSZzqYqi+vcSmLB3pvBJNqt27q2i989RgUGyGJN6l2YSndlm6ovpa1CcvXTRdMzRSy9p2qG9Z5XVJkPZZ0VjQOIZt86wWnbmXN4z57PttzE7vqud/sJVVj+ZB7Vog2heP2nWAmXh6mASnpnwa61aEE3Fmgf1dd7obLdZq+W+VqLEdRkFFauzMcXqbBdXxURVxURVHpPLTCN5+Zjc/l7uLx8TksfkIivzoTWZHCmFds+h2fsvTM1cJvlLT0pSd7PZJFvtg/DYWVNUzpGXy6TgAObdVrJrKMnkIhnlJVOyGafs9XF6tfSuK/k6w5Q9YV6tbXLSNspJ2Tvo1doVJmU0L22PqRPWet95pfUyp+5F5m/LfnHUy6n5NrWPOWvPOrc9q99vzdpZs/SqvQ1VVUxUVUxUVUxUVUxUVUxUVUxUVUxUVUxUVUxUVUxU/T+J+pGgzPYZPwAAAABJRU5ErkJggg==" alt="" />
     </Box>

     <Box id='serv'>
        <h3>Service@geekbuying.com</h3>
        <h3>Ticket</h3>
        <h3>Live Chat</h3>
     </Box>


     <Box id='logos'>
        <img id='log' src="https://www.freepnglogos.com/uploads/mcafee-logo-png/mcafee-logo-graphics-download-1.png" alt="" />
        <img id='paypal' src="https://static.vecteezy.com/system/resources/previews/009/469/637/original/paypal-payment-icon-editorial-logo-free-vector.jpg" alt="" />
        <img id='visa' src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="" />
        <img id='master' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="" />
        <img id='amr' src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png" alt="" />
        <img id='pilot' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/1280px-Trustpilot_Logo_%282022%29.svg.png" alt="" />
     </Box>

        


    </Box>
  )
}

export default Footer
const Formula = () => {
    return(
        <div class="div2"> 
        <form>
  <input type="text" id="fname" name="fname" placeholder="Indtast dit fulde navn"/>
 <br/>
  <input type="email" placeholder="Indtast gyldig E-Mail"/>
  <br/>
  <input type="tel" id="phone" name="phone"
       pattern="[0-9]{8}"
       required placeholder="Indtast Telefonnummer"/>
  <br/>
  <input type="text" id="textfield" name="textfield" placeholder="Ext. Besked"/>
  <br/>
  <input type="reset" value="Reset"/>
  <input type="submit" value="Submit"/>
</form>
        </div>
    )
}

export default Formula
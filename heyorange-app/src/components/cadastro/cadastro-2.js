{/* Seleção de Mentor ou Mentorando */}
<FormGroup row tag="fieldset">
<legend className="col-form-label col-sm-2">
    Escolha uma opção:
</legend>
<Col sm={5}>
    <FormGroup check>
        <Input
            name="option"
            type="radio"
            value={"Mentor"}
            onChange={handleChangeOption}
        />
        {' '}
        <Label check>Mentor</Label>
    </FormGroup>
    <FormGroup check>
        <Input
            name="option"
            type="radio"
            value={"Mentorando"}
            onChange={handleChangeOption}
        />
        {' '}
        <Label check>Mentorando</Label>
    </FormGroup>
</Col>
</FormGroup>
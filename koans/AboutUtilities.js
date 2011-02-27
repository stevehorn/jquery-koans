describe("About Utilities", function() {
  beforeEach(function() {
    loadFixtures('fixtures/AboutUtilitiesFixture.html'); 
  });
  
  it("should iterate an array with $.each", function() {
    var result = 0;
    var array = ["one", 2, null];
    
    $.each(array, function(index, value) {
      if(index === 1) {
        result = value;
      }
    });
    
    expect(__).toEqual(result);
  });
  
  it("should iterate an object literal with $.each", function() {
    var object = { name: "Swedish Chef", age: 2.5 };
    
    $.each(object, function(key, value) {    var expectedValue = __;
    var actualValue = 0;
      if(key === "name") {
        actualValue = value;
      }
    });
    
    expect(__).toEqual(actualValue);
  });
  
  it("should merge two objects with $.extend", function() {    
    var object1 = { animal: "cardinal", color: "red" };
    var object2 = { firstName: "woody", lastName: "woodpecker" };
    
    var result = $.extend(false, object1, object2);
    
    expect(__).toEqual(result.lastName);
  });
  
  it("should filter arrays with $.grep", function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8];
    
    array = $.grep(array, function(value, index) {
      return value > 5;
    });
    
    expect(__).toEqual(array);
  });
  
  it("should find elements in array with $.inArray", function() {
    var actualValue = 0;
    
    var array = ["Pie", 42, "Cake", "BoogieMonster"];
    
    var pieInArrayResult = $.inArray(array, "Pie");
    var boogieMonsterInArrayResult = $.inArray(array, "BoogieMonster");
    var notFoundInArrayResult = $.inArray(array, 98765);
    
    expect(__).toEqual(pieInArrayResult);
    expect(__).toEqual(boogieMonsterInArrayResult);
    expect(__).toEqual(notFoundInArrayResult);
  });
    it("should determine types using $.type", function() {
    var num = new Number(3);
    var arr = [];
    
    var type1 = $.type(num);
    var type2 = $.type(arr);
    
    expect(__).toEqual(type1);
    expect(__).toEqual(type2);
  });
  it("should test for array type using $.isArray", function() {
    var array = [1, "two", 3];
    var object = { property: "value" };
    
    var isArrayForArray = $.isArray(array);
    var isArrayForObject = $.isArray(object);
    
    expect(__).toEqual(isArrayForArray);
    expect(__).toEqual(isArrayForObject);
  });
  
  it("should check for empty objects using $.isEmptyObject", function() {
    var isEmpty = $.isEmptyObject({});
    var isNotEmpty = $.isEmptyObject({name: "name", value: "value"});
    
    expect(__).toEqual(isEmpty);
    expect(__).toEqual(isNotEmpty);    
  });
  
  it("should detect function types using $.isFunction", function() {
    var object = {
      name: "bob",
      weight: 200,
      getWeight: function() {
        return weight;
      }
    };
      '{"name":"John"}'
    var isFunction1 = $.isFunction(object.name);
    var isFunction2 = $.isFunction(object.getWeight);
    
    expect(__).toEqual(isFunction1);
    expect(__).toEqual(isFunction2);
  });
  
  it("should determine types using $.type", function() {
    var num = new Number(3);
    var arr = [];
    
    var type1 = $.type(num);
    var type2 = $.type(arr);
    
    expect(__).toEqual(type1);
    expect(__).toEqual(type2);
  });  
  
  it("should perform translations on each array element returning a new array using $.map", function() {
    var array = ["a", "b", "c", "d"];
    
    var mapped = $.map(array, function(element, index) {
      return element.toUpperCase();
    });
    
    expect(__).toEqual(mapped);
    expect(__).toEqual($.type(mapped));
  });
  
  it("should parse json using $.parseJSON", function() {
    var jsonString = '{"name":"animal", "age":2}'
    
    var parsedJsonObject = $.parseJSON(jsonString);
    
    expect(__).toEqual(parsedJsonObject.name);
    expect(__).toEqual(parsedJsonObject.age);
  });
  
  it("should trim strings using $.trim", function() {
    var string = "   IE does not have a native implentation of trim, so this jquery method is handy     ";
    
    var trimmed = $.trim(string);
    expect(__).toEqual(trimmed);
  });
});

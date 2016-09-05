class UserDetailsController  {

  /**
   * Constructor
   *
   * @param $mdBottomSheet
   * @param $log
   */
  constructor($mdBottomSheet, $log) {
    this.$mdBottomSheet = $mdBottomSheet;
    this.$log = $log;
  }

  /**
   * Show the bottom sheet
   */
  share() {
    var user = this.selected;
    var $mdBottomSheet = this.$mdBottomSheet;

    $mdBottomSheet.show({
      parent: angular.element(document. getElementById('content')),
      templateUrl: 'src/users/components/details/ContactSheet.html',
      controller: [ '$mdBottomSheet', UserSheetController],
      controllerAs: "$ctrl",
      bindToController : true
    }).then((clickedItem) => {
      this.$log.debug( clickedItem.name + ' clicked!');
    });

    }
  }

}
export default UserDetailsController;

